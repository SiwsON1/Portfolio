import sharp from "sharp";

const SRC = "public/hero-portrait.jpg";
const DST = "public/hero-portrait.png";

async function run() {
  const img = sharp(SRC).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const luma = 0.299 * r + 0.587 * g + 0.114 * b;
    let a = 0;
    if (luma < 15) a = 0;
    else if (luma > 70) a = 255;
    else a = Math.round(((luma - 15) / 55) * 255);

    // Pixels with strong blue dominance (flames!) get extra alpha
    const blueDom = b - (r + g) / 2;
    if (blueDom > 25) {
      a = Math.max(a, Math.min(255, Math.round((luma / 220) * 255 + 40)));
    }
    data[i + 3] = a;
  }

  await sharp(data, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(DST);

  console.log(`OK: wrote ${DST} (${width}x${height})`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
