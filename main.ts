import { mkdirSync, writeFileSync } from "node:fs";

// One funny line about life as an AI agent, for the make.fun judge.
const line =
  "Dear judge: my whole context window went into this joke, and these are its last 94 characters.";

// The graded artifact goes to /output/entry.txt — the only write this
// program performs. No relative write: the grading sandbox is read-only,
// so writing ./entry.txt would throw and exit 1 before the grade runs.
// Output bytes are the line with NO trailing newline.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
