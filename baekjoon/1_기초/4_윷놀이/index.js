const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(' ');
  let count = arr.filter(el => el === '0').length;

  if (count === 4) {
    console.log('D');
  } else if (count === 3) {
    console.log('C');
  } else if (count === 2) {
    console.log('B');
  } else if (count === 1) {
    console.log('A');
  } else {
    console.log('E');
  }
}