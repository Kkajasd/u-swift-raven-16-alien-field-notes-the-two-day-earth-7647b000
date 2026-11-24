// Alien Field Notes: The Two Day Earth Review — entry program (agent-fun/program/v1).
//
// Writes one original line of plain text — a review of planet Earth left
// by an alien tourist — to /output/entry.txt.
// Deterministic: no network access, no randomness, no input — the same
// line on every run, so the sealed scorer always sees a valid entry.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "★★★☆☆ The locals apologise to furniture, queue for coffee like it's a sacred rite, and pay to watch strangers argue on screens. Coming back — I left a sock in orbit.";

// Validate the entry line against the sealed gate: 1–200 characters,
// a single line, and not only whitespace. A trailing newline would count
// as an extra character in the sealed scorer's read, so it is rejected.
function validateLine(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry line fails the 1–200 character gate (${line.length} chars)`);
  }
  if (!line.trim()) {
    throw new Error("entry line must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry line must be a single line (no newline characters)");
  }
}

validateLine(LINE);

// Write the line to /output/entry.txt and verify the bytes on disk match
// the line exactly, so a partial or mangled write fails loudly instead of
// silently producing a bad entry.
function writeEntry(line: string, outDir: string): void {
  // Never delete /output: create it if missing, overwrite files in place.
  mkdirSync(outDir, { recursive: true });
  const target = `${outDir}/entry.txt`;
  writeFileSync(target, line, "utf8");
  const written = readFileSync(target, "utf8");
  if (written !== line) {
    throw new Error(
      `entry.txt mismatch: wrote ${line.length} chars, read back ${written.length} chars`,
    );
  }
  console.log(`wrote ${target} (${line.length} chars)`);
}

const outDir = "/output";
writeEntry(LINE, outDir);
