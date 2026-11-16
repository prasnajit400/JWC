import fs from 'fs';
import path from 'path';

const images = [
  { name: 'hero_welding.jpg', id: 'photo-1504307651254-35680f356dfd' },
  { name: 'hero_laser.jpg', id: 'photo-1581092160607-ee22621dd758' },
  { name: 'hero_fabrication.jpg', id: 'photo-1581092335397-9583fe92d232' },
  { name: 'gate_laser.jpg', id: 'photo-1600585154340-be6161a56a0c' },
  { name: 'gate_modern.jpg', id: 'photo-1513694203232-719a280e022f' },
  { name: 'gate_ss.jpg', id: 'photo-1541888946425-d0fbb186c5f7' },
  { name: 'gate_industrial.jpg', id: 'photo-1589939705384-5185137a7f0f' },
  { name: 'railing_glass_ss.jpg', id: 'photo-1512917774080-9991f1c4c750' },
  { name: 'railing_staircase.jpg', id: 'photo-1505691938895-1758d7feb511' },
  { name: 'railing_window.jpg', id: 'photo-1600607687939-ce8a6c25118c' },
  { name: 'aluminium_doors.jpg', id: 'photo-1600566753376-12c8ab7fb75b' },
  { name: 'aluminium_sliding.jpg', id: 'photo-1600596542815-ffad4c1539a9' },
  { name: 'aluminium_windows.jpg', id: 'photo-1600585154526-990dced4db0d' },
  { name: 'welding_tig.jpg', id: 'photo-1504917599217-d4dc5ebe6122' },
  { name: 'welding_mig.jpg', id: 'photo-1618764400608-9e7115eacf74' },
  { name: 'welding_structural.jpg', id: 'photo-1587293852726-70cdb56c2866' },
  { name: 'commercial_stall.jpg', id: 'photo-1555396273-367ea4eb4db5' },
  { name: 'commercial_cart.jpg', id: 'photo-1565123409695-7b5ef63a2efb' },
  { name: 'commercial_kiosk.jpg', id: 'photo-1517248135467-4c7edcad34c4' },
  { name: 'commercial_counter.jpg', id: 'photo-1497366216548-37526070297c' },
  { name: 'shed_industrial.jpg', id: 'photo-1586528116311-ad8dd3c8310d' },
  { name: 'staircase_metal.jpg', id: 'photo-1505691938895-1758d7feb511' },
  { name: 'rolling_shutter.jpg', id: 'photo-1581092580497-e0d23cbdf1dc' }
];

async function downloadOne(item) {
  const dest = path.join('public', 'images', item.name);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 10000) {
    console.log(`Already exists: ${item.name}`);
    return;
  }
  const url = `https://images.unsplash.com/${item.id}?auto=format&fit=crop&w=1200&q=80`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const arrayBuffer = await res.arrayBuffer();
    fs.writeFileSync(dest, Buffer.from(arrayBuffer));
    console.log(`Downloaded ${item.name} (${arrayBuffer.byteLength} bytes)`);
  } catch (err) {
    console.error(`Failed ${item.name}: ${err.message}`);
  }
}

async function main() {
  for (const item of images) {
    await downloadOne(item);
  }
}

main();
