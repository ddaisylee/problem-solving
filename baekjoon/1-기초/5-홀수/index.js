const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(val => +val);

// solution 함수를 정의해 문제를 해결하는 방식을 사용해보았습니다.
function solution(input) {
  let odd = input.filter(el => el % 2 === 1);
  if (!odd.length) {
    console.log(-1);
  } else {
    console.log(odd.reduce((acc, cur) => acc + cur));
    console.log(Math.min(...odd))
  }
}

solution(input);