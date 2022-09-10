const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('');
/**
 * 0~9까지 카운트 할 수 있는 배열을 하나 만듭니다.
 * input을 반복문을 돌면서 count 배열의 값을 증가시킵니다.
 *  6과 9는 두 숫자의 count 값을 더해 2로 나눈 값을 ceil로 올림합니다.
 * 가장 큰 값이 답이 됩니다.
 */
const count = new Array(10).fill(0);

for (let i = 0; i < input.length; i++) {
  count[input[i]]++;
}

// count[6]이랑 count[9]랑 어떻게 떼어오지? -> splice로 제거해야 겠다.
const sixAndNine = Math.ceil((count[6] + count[9]) / 2);

count.splice(9, 1);
count.splice(6, 1);
count.push(sixAndNine);

console.log(Math.max(...count));

