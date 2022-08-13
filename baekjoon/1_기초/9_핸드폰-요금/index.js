const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const time = input[1].split(' ').map(val => +val);
let m = 0;
let y = 0;

for (let i = 0; i < time.length; i++) {
  y += time[i] % 30 === 0 ? (time[i] / 30 + 1) * 10 : Math.ceil(time[i] / 30) * 10;
  m += time[i] % 60 === 0 ? (time[i] / 60 + 1) * 15 : Math.ceil(time[i] / 60) * 15;
}

if (y === m) {
  console.log('Y M ' + m);
} else if (y < m) {
  console.log('Y ' + y);
} else {
  console.log('M ' + m);
}