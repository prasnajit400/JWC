import fs from 'fs';

const content = fs.readFileSync('d:/JWC/stream_1.txt', 'latin1');
console.log('Stream 1 length:', content.length);

// Look for text operators like Tj or TJ
const textMatches = content.match(/\((.*?)\)\s*Tj/g) || [];
console.log('Text matches (Tj):', textMatches.slice(0, 20));

const arrayMatches = content.match(/\[(.*?)\]\s*TJ/g) || [];
console.log('Array text matches (TJ):', arrayMatches.slice(0, 20));

// Look for paths and colors
const colorMatches = content.match(/([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)\s+(rg|RG|scn|SCN)/g) || [];
console.log('Colors count:', colorMatches.length);
console.log('Sample colors:', [...new Set(colorMatches)].slice(0, 10));
