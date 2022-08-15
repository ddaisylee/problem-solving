const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const arr = input[1].split(' ').map(el => +el);
const v = +input[2]

function solution(arr, v) {
  const result = arr.filter(el => el === v).length;
  console.log(result);
}

solution(arr, v);