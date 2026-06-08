/**
 * Generate optimized logo + favicon from TALLER teaser source.
 */
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";
import sharp from "sharp";

const SOURCE = resolve(
  process.cwd(),
  process.env.TALLER_LOGO_SOURCE ??
    resolve(process.cwd(), "../TALLER/LOGO/Taller_Tiser.png"),
);

const OUT_PUBLIC = resolve(process.cwd(), "public");
const OUT_APP = resolve(process.cwd(), "app");

async function main() {
  mkdirSync(OUT_PUBLIC, { recursive: true });
  mkdirSync(OUT_APP, { recursive: true });

  const pipeline = sharp(SOURCE).ensureAlpha();

  await pipeline
    .clone()
    .resize(512, 512, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toFile(resolve(OUT_PUBLIC, "taller-bc-logo.png"));

  await pipeline
    .clone()
    .resize(192, 192, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toFile(resolve(OUT_APP, "icon.png"));

  await pipeline
    .clone()
    .resize(180, 180, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toFile(resolve(OUT_APP, "apple-icon.png"));

  await pipeline
    .clone()
    .resize(32, 32, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toFile(resolve(OUT_APP, "favicon.png"));

  console.log("Generated:");
  console.log("  public/taller-bc-logo.png (512)");
  console.log("  app/icon.png (192)");
  console.log("  app/apple-icon.png (180)");
  console.log("  app/favicon.png (32)");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
