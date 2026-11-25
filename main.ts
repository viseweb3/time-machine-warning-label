// Funniest Time Machine Warning Label — one warning label, at most 120 characters.
// Writes the label to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "WARNING: If your grandfather disappears, remain calm. You were never here.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
