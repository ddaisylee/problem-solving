const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(val => +val);

function solution(input) {
  // 중앙값을 출력하기 위해서는 오름차순으로 정렬해야 합니다.
  input.sort((a, b) => a - b);
  // 평균 출력
  console.log(input.reduce((acc, cur) => acc + cur) / input.length);
  // 중앙값 출력
  console.log(input[2]);
}

solution(input);