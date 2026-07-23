import { lessonSchema, lessonContractIssues } from "../src/types/schemas";
import { a1u4l1 } from "../src/content/a1/u4/l1";
import { a1u4l2 } from "../src/content/a1/u4/l2";

for (const l of [a1u4l1, a1u4l2]) {
  const z = lessonSchema.safeParse(l);
  if (!z.success) {
    console.error(`ZOD FAIL ${l.id}:`);
    for (const i of z.error.issues) console.error("  " + i.path.join(".") + ": " + i.message);
  } else console.log(`${l.id} zod OK`);
  const issues = lessonContractIssues(l);
  console.log(`${l.id} contract:`, issues.length ? "\n  - " + issues.join("\n  - ") : "NONE ✓");
}
