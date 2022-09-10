const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('');

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const count = new Array(26).fill(0);

input.forEach((val) => count[alphabet.indexOf(val)]++);
console.log(count.join(' '));
