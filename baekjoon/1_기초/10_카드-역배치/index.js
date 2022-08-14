const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(el => el.split(' '))

console.log(input);