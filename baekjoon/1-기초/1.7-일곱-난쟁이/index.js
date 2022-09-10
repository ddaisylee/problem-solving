const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(val => +val);

// 9명 키의 합 - 난쟁이가 아닌 2명 키의 합 = 100
function solution(input) {
  let arr = input.sort((a, b) => a - b);
  let sum = input.reduce((a, b) => a + b, 0);

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        return arr;
      }
    }
  }
}

// solution 함수 내부에서 결과값을 리턴하고, 함수 외부에서 값을 출력함으로써 역할을 분리합니다.
solution(input).forEach((val) => console.log(val));