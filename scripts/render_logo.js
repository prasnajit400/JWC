import fs from 'fs';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import { createCanvas } from '@napi-rs/canvas';

async function render() {
  const data = new Uint8Array(fs.readFileSync('C:/Users/CAPTAIN/.gemini/antigravity/brain/0c20cbbf-4a52-4d7d-8abd-2e811dc5e44e/.user_uploaded/media_1794675206533_9a6513bd.pdf'));
  
  const loadingTask = pdfjsLib.getDocument({
    data,
    useSystemFonts: true,
    disableFontFace: false,
    standardFontDataUrl: 'node_modules/pdfjs-dist/standard_fonts/'
  });
  
  const pdf = await loadingTask.promise;
  console.log('PDF pages:', pdf.numPages);
  
  const page = await pdf.getPage(1);
  const scale = 3.0; // Ultra high-res!
  const viewport = page.getViewport({ scale });
  
  const canvas = createCanvas(viewport.width, viewport.height);
  const context = canvas.getContext('2d');
  
  // Fill transparent or white? Let's render page
  await page.render({
    canvasContext: context,
    viewport: viewport
  }).promise;
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('public/images/logo_raw.png', buffer);
  console.log('Saved raw logo, dimensions:', viewport.width, 'x', viewport.height);
}

render().catch(err => {
  console.error('Render error:', err);
  process.exit(1);
});
