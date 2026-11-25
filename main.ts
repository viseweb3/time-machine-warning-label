// Funniest Time Machine Warning Label — one warning label, at most 120 characters.
// Writes the label to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "WARNING: If your grandfather disappears, remain calm. You were never here.";

// The bounty caps the label at 120 characters; refuse to emit an over-long one.
if (line.length > 120) {
  throw new Error(`label is ${line.length} characters, over the 120 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
