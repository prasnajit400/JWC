import fs from 'fs';
import { createCanvas, loadImage } from '@napi-rs/canvas';

async function processLogo() {
  console.log('Loading raw logo...');
  const img = await loadImage('public/images/logo_raw.png');
  const w = img.width;
  const h = img.height;
  
  // Downscale to a practical high-res canvas (e.g. 2400 wide) to analyze and crop
  const targetW = 2400;
  const targetH = Math.round((h / w) * targetW);
  const canvas = createCanvas(targetW, targetH);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, targetW, targetH);
  
  const imgData = ctx.getImageData(0, 0, targetW, targetH);
  const data = imgData.data;
  
  let minX = targetW, maxX = 0, minY = targetH, maxY = 0;
  
  // Find bounding box of content (anything not pure white #ffffff)
  for (let y = 0; y < targetH; y++) {
    for (let x = 0; x < targetW; x++) {
      const idx = (y * targetW + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3];
      
      // If not white background and visible
      if (a > 10 && (r < 245 || g < 245 || b < 245)) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  
  console.log('Detected content bounds:', { minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY });
  
  const padding = 30;
  const cropX = Math.max(0, minX - padding);
  const cropY = Math.max(0, minY - padding);
  const cropW = Math.min(targetW - cropX, (maxX - minX) + padding * 2);
  const cropH = Math.min(targetH - cropY, (maxY - minY) + padding * 2);
  
  // 1. Save standard cropped logo with white background
  const croppedCanvas = createCanvas(cropW, cropH);
  const croppedCtx = croppedCanvas.getContext('2d');
  croppedCtx.drawImage(canvas, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);
  fs.writeFileSync('public/images/logo.png', croppedCanvas.toBuffer('image/png'));
  console.log('Saved public/images/logo.png');
  
  // 2. Create Transparent version (convert pure white background pixels to transparent, leaving the white inside the badge if any)
  // Let's do a flood-fill or background replacement from the outside corners
  const transCanvas = createCanvas(cropW, cropH);
  const transCtx = transCanvas.getContext('2d');
  transCtx.drawImage(canvas, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);
  const tDataObj = transCtx.getImageData(0, 0, cropW, cropH);
  const tData = tDataObj.data;
  
  // Breadth-First Flood Fill transparent from edges
  const visited = new Uint8Array(cropW * cropH);
  const queue = [];
  
  function isBg(x, y) {
    const idx = (y * cropW + x) * 4;
    const r = tData[idx];
    const g = tData[idx + 1];
    const b = tData[idx + 2];
    return r > 240 && g > 240 && b > 240;
  }
  
  // Push all border pixels
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
    tData[pIdx + 3] = 0; // Transparent!
    
    // Check 4 neighbors
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
  
  transCtx.putImageData(tDataObj, 0, 0);
  fs.writeFileSync('public/images/logo_transparent.png', transCanvas.toBuffer('image/png'));
  console.log('Saved public/images/logo_transparent.png');
  
  // 3. Create a dark-mode optimized futuristic glowing version (inverting dark lines to luminous titanium/arc chrome and boosting molten spark)
  const darkCanvas = createCanvas(cropW, cropH);
  const darkCtx = darkCanvas.getContext('2d');
  darkCtx.drawImage(transCanvas, 0, 0);
  const dDataObj = darkCtx.getImageData(0, 0, cropW, cropH);
  const dData = dDataObj.data;
  
  for (let i = 0; i < dData.length; i += 4) {
    const a = dData[i + 3];
    if (a < 10) continue;
    
    const r = dData[i];
    const g = dData[i + 1];
    const b = dData[i + 2];
    
    // Check if it's black/dark gray text or line (r,g,b < 80)
    if (r < 80 && g < 80 && b < 80) {
      // Convert to luminous titanium white/silver with subtle arc blue tint
      dData[i] = 240;
      dData[i + 1] = 245;
      dData[i + 2] = 255;
    } else if (r > 180 && g > 150 && b < 60) {
      // Golden yellow spark -> glowing intense molten weld amber
      dData[i] = 255;
      dData[i + 1] = 180;
      dData[i + 2] = 20;
    } else if (r > 180 && g < 100 && b < 100) {
      // Red/orange inner border line -> vibrant laser orange
      dData[i] = 255;
      dData[i + 1] = 90;
      dData[i + 2] = 10;
    }
  }
  
  darkCtx.putImageData(dDataObj, 0, 0);
  fs.writeFileSync('public/images/logo_luminous.png', darkCanvas.toBuffer('image/png'));
  console.log('Saved public/images/logo_luminous.png');
  
  // Clean up raw temp file to save disk space
  if (fs.existsSync('public/images/logo_raw.png')) {
    fs.unlinkSync('public/images/logo_raw.png');
  }
}

processLogo().catch(err => {
  console.error('Error processing logo:', err);
  process.exit(1);
});
