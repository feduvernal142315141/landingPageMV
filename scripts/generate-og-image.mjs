import sharp from "sharp";
import fs from "fs";
import path from "path";

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const NAVY_SOFT = "#12293f";

const ASSETS_DIR = path.resolve("src/assets");
const PUBLIC_DIR = path.resolve("public");
const OUTPUT_JPG = path.join(PUBLIC_DIR, "og-image.jpg");
const OUTPUT_WEBP = path.join(PUBLIC_DIR, "og-image.webp");

async function generateOgImage() {
  console.log("Generating OG image...");

  const hero = sharp(path.join(ASSETS_DIR, "hero.webp"))
    .resize(OG_WIDTH, OG_HEIGHT, {
      fit: "cover",
      position: "top",
    })
    .toColorspace("srgb");

  const gradientSvg = `
    <svg width="${OG_WIDTH}" height="${OG_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${NAVY_SOFT}" stop-opacity="0.85" />
          <stop offset="50%" stop-color="${NAVY_SOFT}" stop-opacity="0.5" />
          <stop offset="100%" stop-color="${NAVY_SOFT}" stop-opacity="0.85" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
    </svg>
  `;

  const gradient = sharp(Buffer.from(gradientSvg))
    .resize(OG_WIDTH, OG_HEIGHT);

  const logoIcon = sharp(path.join(ASSETS_DIR, "MenteVior-logo.png"))
    .resize(200, null, { fit: "inside" })
    .toColorspace("srgb");

  const logoName = sharp(path.join(ASSETS_DIR, "MenteVior-name.png"))
    .resize(300, null, { fit: "inside" })
    .toColorspace("srgb");

  const [heroBuffer, gradientBuffer, iconBuffer, nameBuffer] = await Promise.all([
    hero.toBuffer(),
    gradient.toBuffer(),
    logoIcon.toBuffer(),
    logoName.toBuffer(),
  ]);

  const iconMeta = await sharp(iconBuffer).metadata();
  const nameMeta = await sharp(nameBuffer).metadata();

  const iconWidth = iconMeta.width || 200;
  const iconHeight = iconMeta.height || 200;
  const nameWidth = nameMeta.width || 300;
  const nameHeight = nameMeta.height || 50;

  const gap = 24;
  const totalHeight = iconHeight + gap + nameHeight;
  const startY = (OG_HEIGHT - totalHeight) / 2;

  const iconLeft = (OG_WIDTH - iconWidth) / 2;
  const nameLeft = (OG_WIDTH - nameWidth) / 2;
  const iconTop = startY;
  const nameTop = startY + iconHeight + gap;

  const composite = sharp(heroBuffer)
    .composite([
      { input: gradientBuffer, blend: "over" },
      { input: iconBuffer, left: Math.round(iconLeft), top: Math.round(iconTop) },
      { input: nameBuffer, left: Math.round(nameLeft), top: Math.round(nameTop) },
    ]);

  const jpgBuffer = await composite.clone().jpeg({ quality: 90 }).toBuffer();
  const webpBuffer = await composite.clone().webp({ quality: 85 }).toBuffer();

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_JPG, jpgBuffer);
  fs.writeFileSync(OUTPUT_WEBP, webpBuffer);

  console.log(`OG image generated: ${OUTPUT_JPG} (JPEG, quality 90)`);
  console.log(`OG image generated: ${OUTPUT_WEBP} (WebP, quality 85)`);
  console.log(`Dimensions: ${OG_WIDTH}x${OG_HEIGHT}`);
  console.log(`Icon: ${iconWidth}x${iconHeight} at (${Math.round(iconLeft)}, ${Math.round(iconTop)})`);
  console.log(`Name: ${nameWidth}x${nameHeight} at (${Math.round(nameLeft)}, ${Math.round(nameTop)})`);
}

generateOgImage().catch((err) => {
  console.error("Error generating OG image:", err);
  process.exit(1);
});