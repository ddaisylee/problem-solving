const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(' ');

// 첫째 줄에는 두 수 사이에 있는 숫자의 개수를 출력
// 둘째 줄에는 두 수 사이에 있는 수를 오름차순으로 출력
let count = 0;
let numbers = [];

const start = Math.min(...input);
const end = Math.max(...input);

if (start === end) {
  console.log(0);
} else {
  count = end - start - 1;
  for (let i = start + 1; i < end; i++) {
    numbers.push(i);
  }
  console.log(count);
  console.log(numbers.join(' '));
}