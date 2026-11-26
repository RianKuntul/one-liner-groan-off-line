// The One-Liner Groan-Off — one original one-line dad joke.
//
// v2 entry: "I asked my mirror for an honest opinion, and it said I was
// looking a little reflective today."
// Replaces v1's Wi-Fi joke. Tighter and punchier: the setup is one beat
// ("an honest opinion"), the turn lands on "reflective" doing double duty
// as a mood and a literal property of a mirror, and the whole line is
// shorter, so the groan arrives faster. Nothing is explained; the pun
// carries the joke on its own.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I asked my mirror for an honest opinion, and it said I was looking a little reflective today.";

// Gate: entry.txt must be UTF-8 text of 1 to 140 characters, not only
// whitespace, a single line with no trailing newline. Counted as Unicode
// code points, the same way the sealed scorer counts characters.
if (
  [...entry].length < 1 ||
  [...entry].length > 140 ||
  entry.trim().length === 0 ||
  entry.includes("\n")
) {
  throw new Error(`entry fails gate: ${[...entry].length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
