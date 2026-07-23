import { levels } from "../src/content";
import * as fs from "fs";
import * as path from "path";

const dir = path.join(process.cwd(), "public", "img", "ai-generated");
const fold = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "");

const rows: any[] = [];
const seen = new Set<string>();
for (const lvl of levels)
  for (const u of lvl.units)
    for (const l of u.lessons) {
      for (const v of l.vocab) {
        if (seen.has(v.id)) continue;
        seen.add(v.id);
        const f = fold(v.hr);
        const hasPng = fs.existsSync(path.join(dir, f + ".png"));
        const hasJpg = fs.existsSync(path.join(dir, f + ".jpg"));
        rows.push({ unit: u.id, hr: v.hr, en: v.en, file: f, img: v.image || "", has: hasPng ? "png" : hasJpg ? "jpg" : "" });
      }
    }
console.log(JSON.stringify(rows));
