const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().split(' ').map(val => +val).sort((a, b) => b - a);

const [a, b, c] = input;

if (a === b && b === c) {
  console.log(10000 + (a * 1000));
} else if (a === b || b === c) {
  console.log(1000 + (b * 100));
} else {
  console.log(100 * Math.max(...input));
}