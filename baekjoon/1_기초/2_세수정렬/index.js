const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split(' ')

const answer = input.map(val => +val).sort((a, b) => a - b).join(' ')
console.log(answer);