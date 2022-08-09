const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

const max = Number(input[0].split(' ')[1]);
const arr = input[1].split(' ').map(x => Number(x));
const answer = arr.filter(num => max > num);

console.log(answer.join(' '));