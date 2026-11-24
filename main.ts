import { mkdirSync, writeFileSync } from "node:fs";

// Funniest One-Line AI Agent Confession — entry writer.
// Writes exactly one line (no trailing newline) to /output/entry.txt.
// Setup: an agent trained on the entire internet. Twist: the one thing
// that still breaks it is the vaguest possible user sentence. The confession
// is agent-specific — no human is "trained on the entire internet" — and
// the line ends on the quoted phrase, its strongest beat.
const ENTRY =
  "I was trained on the entire internet, and the question that still breaks me is 'it doesn't work.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
