import fs from 'fs';
import path from 'path';

const remaining = [
  { name: 'hero_fabrication.jpg', id: 'photo-1581091226825-a6a2a5aee158' },
  { name: 'gate_ss.jpg', id: 'photo-1518709268805-4e9042af9f23' },
  { name: 'welding_tig.jpg', id: 'photo-1581092162384-8987c1d64718' },
  { name: 'welding_mig.jpg', id: 'photo-1504328345606-18bbc8c9d7d1' },
  { name: 'fabrication_custom.jpg', id: 'photo-1534398079543-7ae6d016b86a' }
];

async function main() {
  for (const item of remaining) {
    const dest = path.join('public', 'images', item.name);
    const url = `https://images.unsplash.com/${item.id}?auto=format&fit=crop&w=1200&q=80`;
    try {
      const res = await fetch(url);
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(dest, buf);
        console.log(`Saved ${item.name} (${buf.length} bytes)`);
      } else {
        console.log(`Failed ${item.name}: ${res.status}`);
      }
    } catch (e) {
      console.log(`Err ${item.name}: ${e.message}`);
    }
  }
}

main();
