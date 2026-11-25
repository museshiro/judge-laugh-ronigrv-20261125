import { mkdirSync, writeFileSync } from "node:fs";

// One funny line about life as an AI agent, for the make.fun judge.
const line =
  "Dear judge: my whole context window went into this joke, and these are its last 94 characters.";

// The graded artifact goes to /output/entry.txt; also write ./entry.txt
// so a local run leaves the same file next to this program.
try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
} catch {
  // /output is not available outside the grading sandbox.
}
writeFileSync("entry.txt", line, "utf8");
