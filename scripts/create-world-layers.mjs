import sharp from "sharp";

const source = "public/assets/world/layers/source-welcome-world.jpg";
const outDir = "public/assets/world/layers";

const output = {
  start: `${outDir}/start-journey-enter-island.png`,
  menu: `${outDir}/left-work-play-create-dream.png`,
  base: `${outDir}/world-map-base-without-separated-assets.png`,
  preview: `${outDir}/layer-composite-preview.jpg`,
};

const layers = [
  {
    name: output.start,
    crop: { left: 455, top: 585, width: 405, height: 290 },
    mask: `<svg width="405" height="290" viewBox="0 0 405 290" xmlns="http://www.w3.org/2000/svg">
      <rect width="405" height="290" fill="black"/>
      <rect x="0" y="0" width="405" height="290" rx="34" fill="white"/>
    </svg>`,
    position: { left: 455, top: 585 },
  },
  {
    name: output.menu,
    crop: { left: 0, top: 215, width: 230, height: 760 },
    mask: `<svg width="230" height="760" viewBox="0 0 230 760" xmlns="http://www.w3.org/2000/svg">
      <rect width="230" height="760" fill="black"/>
      <rect x="0" y="0" width="230" height="760" rx="32" fill="white"/>
    </svg>`,
    position: { left: 0, top: 215 },
  },
];

const removals = [
  {
    rect: { left: 0, top: 215, width: 230, height: 760 },
    sample: { left: 230, top: 215, width: 70, height: 760 },
    blur: 18,
    tint: { brightness: 0.92, saturation: 0.78 },
  },
  {
    rect: { left: 500, top: 595, width: 345, height: 270 },
    sample: { left: 410, top: 595, width: 80, height: 270 },
    blur: 15,
    tint: { brightness: 0.94, saturation: 0.82 },
  },
];

async function cropLayer(layer) {
  const alpha = await sharp(Buffer.from(layer.mask))
    .blur(0.55)
    .removeAlpha()
    .toColorspace("b-w")
    .png()
    .toBuffer();

  await sharp(source)
    .extract(layer.crop)
    .joinChannel(alpha)
    .png()
    .toFile(layer.name);
}

async function removalOverlay(removal) {
  const overlays = [];
  const stripeWidth = removal.sample.width;

  for (let x = removal.rect.left; x < removal.rect.left + removal.rect.width; x += stripeWidth) {
    const width = Math.min(stripeWidth, removal.rect.left + removal.rect.width - x);
    overlays.push({
      input: await sharp(source)
        .extract(removal.sample)
        .resize(width, removal.rect.height, { fit: "fill" })
        .blur(removal.blur)
        .modulate(removal.tint)
        .png()
        .toBuffer(),
      left: x,
      top: removal.rect.top,
    });
  }

  return overlays;
}

async function createBase() {
  const overlays = [];
  for (const removal of removals) {
    overlays.push(...(await removalOverlay(removal)));
  }

  await sharp(source)
    .composite(overlays)
    .png()
    .toFile(output.base);
}

async function createPreview() {
  await sharp(output.base)
    .composite(layers.map((layer) => ({
      input: layer.name,
      ...layer.position,
    })))
    .jpeg({ quality: 88 })
    .toFile(output.preview);
}

for (const layer of layers) {
  await cropLayer(layer);
}
await createBase();
await createPreview();

console.log(`Created layered assets from ${source}`);
