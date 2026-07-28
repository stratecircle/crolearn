import { levels } from "../src/content";
import fs from "node:fs";
import path from "node:path";

const fold = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "");

const IMG = path.resolve(process.cwd(), "public", "img");

type Row = { unit: string; word: string; file: string; has: boolean; wired: boolean };
const rows: Row[] = [];

const walk = (n: any) => {
  if (!n || typeof n !== "object") return;
  if (Array.isArray(n)) return n.forEach(walk);
  if (typeof n.id === "string" && typeof n.hr === "string" && /^[a-z]\d+u\d+\./.test(n.id)) {
    const unit = n.id.split(".")[0];
    const file = fold(n.hr);
    rows.push({
      unit,
      word: n.hr,
      file,
      has: fs.existsSync(path.join(IMG, file + ".png")),
      wired: typeof n.image === "string" && n.image.length > 0,
    });
  }
  Object.values(n).forEach(walk);
};
walk(levels);

// dedupe by unit+file
const seen = new Set<string>();
const uniq = rows.filter((r) => {
  const k = r.unit + "|" + r.file;
  if (seen.has(k)) return false;
  seen.add(k);
  return true;
});

const units = [...new Set(uniq.map((r) => r.unit))].sort((a, b) => {
  const pa = a.match(/^([a-z]\d+)u(\d+)$/)!;
  const pb = b.match(/^([a-z]\d+)u(\d+)$/)!;
  return pa[1] === pb[1] ? +pa[2] - +pb[2] : pa[1] < pb[1] ? -1 : 1;
});

let totalMissing = 0;
for (const u of units) {
  const rs = uniq.filter((r) => r.unit === u);
  const missing = rs.filter((r) => !r.has);
  const unwired = rs.filter((r) => r.has && !r.wired);
  totalMissing += missing.length;
  console.log(
    `${u}\ttotal ${rs.length}\thave ${rs.length - missing.length}\tmissing ${missing.length}` +
      (unwired.length ? `\tUNWIRED ${unwired.length}` : "")
  );
  if (missing.length) console.log("   need: " + missing.map((m) => m.file).join(" "));
  if (unwired.length) console.log("   unwired: " + unwired.map((m) => m.file).join(" "));
}
console.log("\nGRAND TOTAL vocab " + uniq.length + " / missing images " + totalMissing);
