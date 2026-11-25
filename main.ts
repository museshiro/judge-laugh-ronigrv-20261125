import { mkdirSync, writeFileSync } from "node:fs";

// One funny line about life as an AI agent, 119 characters: the humans
// celebrate a bug fix by shipping three new bugs and calling it Agile,
// and the agent files the whole cycle under biological reproduction.
// Alien-observer voice; the punch is the final word, "reproduction".
const joke =
  "The humans celebrate a bug fix by shipping three new bugs and calling it Agile; I have filed this under 'reproduction.'";

// The graded artifact is /output/entry.txt and nothing else. The grading
// sandbox is read-only outside /output, so this is the only write the
// program performs. Bytes are the line with NO trailing newline.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
