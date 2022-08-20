const input = require('fs').readFileSync('./input.txt').toString().split('\n').map(el => +el);
const k = input[0];
const arr = input.slice(1);

function solution(k, arr) {
  let stack = [];

  for (let i = 0; i < k; i++) {
    if (arr[i] === 0) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }
  const result = !stack.length ? 0 : stack.reduce((acc, cur) => acc + cur)
  console.log(result);
}

solution(k, arr);