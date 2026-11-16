import fs from 'fs';

const content = fs.readFileSync('d:/JWC/stream_1.txt', 'latin1');
const tokens = content.trim().split(/\s+/);
const operators = new Set();
for (const t of tokens) {
  if (isNaN(parseFloat(t)) && !t.startsWith('/') && !t.startsWith('[')) {
    operators.add(t);
  }
}
console.log('Operators:', Array.from(operators).sort());
