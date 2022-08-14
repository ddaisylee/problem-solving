const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(val => +val);

/**
 * 반복문을 돌기 위해 곱한 결과(숫자)를 문자열로 바꾸고 숫자 하나하나를 요소로 갖는 배열을 만듭니다.
 * 0~9까지 숫자를 count하기 위해 0으로 10개가 채워진 배열을 만듭니다.
 * 반복문으로 배열을 돌면서 count 배열의 인덱스 값을 증가시킵니다.
 */

const result = input.reduce((acc, cur) => acc * cur).toString().split(''); //17037300
let count = new Array(10).fill(0); // 0000000000
result.forEach((val) => count[val]++);

for (let i = 0; i < count.length; i++) {
  console.log(count[i]);
}