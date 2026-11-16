import { loadImage, createCanvas } from '@napi-rs/canvas';
import fs from 'fs';

async function processNewLogo() {
  const img = await loadImage('d:/JWC/public/Logo.jpg');
  const w = img.width;
  const h = img.height;

  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  const imgData = ctx.getImageData(0, 0, w, h);
  const data = imgData.data;

  let minX = w, maxX = 0, minY = h, maxY = 0;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      // Check if not white
      if (r < 245 || g < 245 || b < 245) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log('Bounds:', { minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY });

  const pad = 20;
  const cropX = Math.max(0, minX - pad);
  const cropY = Math.max(0, minY - pad);
  const cropW = Math.min(w - cropX, (maxX - minX) + pad * 2);
  const cropH = Math.min(h - cropY, (maxY - minY) + pad * 2);

  const cropped = createCanvas(cropW, cropH);
  const cCtx = cropped.getContext('2d');
  cCtx.drawImage(canvas, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);

  // Save cropped original
  fs.writeFileSync('d:/JWC/public/images/logo_new.png', cropped.toBuffer('image/png'));
  console.log('Saved d:/JWC/public/images/logo_new.png');

  // Create transparent version: flood fill white from outside
  const transCanvas = createCanvas(cropW, cropH);
  const tCtx = transCanvas.getContext('2d');
  tCtx.drawImage(cropped, 0, 0);

  const tDataObj = tCtx.getImageData(0, 0, cropW, cropH);
  const tData = tDataObj.data;

  const visited = new Uint8Array(cropW * cropH);
  const queue = [];

  function isBg(x, y) {
    const idx = (y * cropW + x) * 4;
    const r = tData[idx];
    const g = tData[idx + 1];
    const b = tData[idx + 2];
    return r > 240 && g > 240 && b > 240;
  }

  for (let x = 0; x < cropW; x++) {
    if (isBg(x, 0)) { queue.push(x, 0); visited[x] = 1; }
    if (isBg(x, cropH - 1)) { queue.push(x, cropH - 1); visited[(cropH - 1) * cropW + x] = 1; }
  }
  for (let y = 0; y < cropH; y++) {
    if (isBg(0, y)) { queue.push(0, y); visited[y * cropW] = 1; }
    if (isBg(cropW - 1, y)) { queue.push(cropW - 1, y); visited[y * cropW + cropW - 1] = 1; }
  }

  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];
    const pIdx = (cy * cropW + cx) * 4;
    tData[pIdx + 3] = 0;

    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1]
    ];
    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < cropW && ny >= 0 && ny < cropH) {
        const vIdx = ny * cropW + nx;
        if (!visited[vIdx] && isBg(nx, ny)) {
          visited[vIdx] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }

  tCtx.putImageData(tDataObj, 0, 0);
  fs.writeFileSync('d:/JWC/public/images/logo_new_transparent.png', transCanvas.toBuffer('image/png'));
  console.log('Saved d:/JWC/public/images/logo_new_transparent.png');
}

processNewLogo().catch(console.error);
