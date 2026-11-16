import fs from 'fs';
import { loadImage, createCanvas } from '@napi-rs/canvas';

async function check() {
  const img = await loadImage('d:/JWC/public/Logo.jpg');
  console.log('Logo dimensions:', img.width, 'x', img.height);
}
check().catch(console.error);
