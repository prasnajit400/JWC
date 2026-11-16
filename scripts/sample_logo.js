import { loadImage, createCanvas } from '@napi-rs/canvas';
import fs from 'fs';

async function sample() {
  const img = await loadImage('d:/JWC/public/Logo.jpg');
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  // Check corners
  const p1 = ctx.getImageData(10, 10, 1, 1).data;
  const p2 = ctx.getImageData(img.width - 10, 10, 1, 1).data;
  const pCenter = ctx.getImageData(Math.floor(img.width/2), Math.floor(img.height/2), 1, 1).data;
  console.log('Top left pixel:', p1);
  console.log('Top right pixel:', p2);
  console.log('Center pixel:', pCenter);
}
sample().catch(console.error);
