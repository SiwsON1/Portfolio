import { removeBackground } from "@imgly/background-removal-node";
import fs from "fs/promises";

/**
 * Wycina tło z avatar.png za pomocą lokalnego modelu ML (segment_anything-mobile).
 * Output: avatar-cutout.png z transparency.
 */

const SRC = "public/avatar.png";
const DST = "public/avatar-cutout.png";

console.log(`→ removing bg from ${SRC}`);
const buffer = await fs.readFile(SRC);
const blob = new Blob([buffer], { type: "image/png" });

const result = await removeBackground(blob, {
  debug: false,
  proxyToWorker: false,
  output: { format: "image/png", quality: 0.95 },
});

const outBuf = Buffer.from(await result.arrayBuffer());
await fs.writeFile(DST, outBuf);
console.log(`✓ wrote ${DST} (${outBuf.length} bytes)`);
