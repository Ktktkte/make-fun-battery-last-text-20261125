// The Battery's Last Text to Its Charger — make.fun entry
// Writes the battery's final text message to /output/entry.txt.
// The grader runs this with /bot read-only: write ONLY to
// $MAKEFUN_OUTPUT_DIR, never into this script's own directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir; // paths are resolved from the script file, never process.cwd()

const line =
  "Thanks for the good times \u2014 all three minutes of them at 1%. " +
  "I'm leaving you for the power bank; at least it texts back.";

// The gate: entry.txt must be 1-200 characters of UTF-8 text, one line.
// The em dash is a single character; the trailing newline is the file
// terminator and is not part of the counted line.
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry line out of gate: ${line.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
