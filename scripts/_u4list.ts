import { levels } from "../src/content";

const fold = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "");

const unit = process.argv[2] || "a1u4";
const out: string[] = [];
const walk = (n: any) => {
  if (!n || typeof n !== "object") return;
  if (Array.isArray(n)) return n.forEach(walk);
  if (typeof n.id === "string" && typeof n.hr === "string" && n.id.startsWith(unit + ".")) {
    out.push(fold(n.hr));
  }
  Object.values(n).forEach(walk);
};
walk(levels);
const uniq = [...new Set(out)];
console.log("COUNT " + uniq.length);
console.log(uniq.join(" "));
