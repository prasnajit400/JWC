import fs from 'fs';

const content = fs.readFileSync('d:/JWC/stream_1.txt', 'latin1');
const numMatches = content.match(/[-+]?[0-9]*\.?[0-9]+/g);
console.log('Numbers found:', numMatches ? numMatches.length : 0);

// Let's find min and max x and y from m, l, c commands
const tokens = content.trim().split(/\s+/);
let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
let prevNums = [];

for (let i = 0; i < tokens.length; i++) {
  const t = tokens[i];
  if (!isNaN(parseFloat(t))) {
    prevNums.push(parseFloat(t));
  } else {
    if (['m', 'l'].includes(t)) {
      if (prevNums.length >= 2) {
        const x = prevNums[prevNums.length - 2];
        const y = prevNums[prevNums.length - 1];
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    } else if (t === 'c') {
      if (prevNums.length >= 6) {
        for (let j = 0; j < 3; j++) {
          const x = prevNums[prevNums.length - 6 + j * 2];
          const y = prevNums[prevNums.length - 6 + j * 2 + 1];
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
    prevNums = [];
  }
}

console.log({ minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY });
