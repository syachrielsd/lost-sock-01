// Funniest Lost Sock Status Update — make.fun bounty
// u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce
// Writes one status update (<=120 chars) in the voice of a lost sock to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Checking in from under the car seat. My partner got the wash. I got a fossilized fry and a spider who charges rent.";

if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-120 non-blank characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
