// 앞으로는 const fs = require('fs') 문과 fs.readFileSync()문을 한 번에 쓸 수 있습니다.
const arr = require('fs').readFileSync('./input.txt').toString().split('\n').slice(1);

const stack = [];
const result = [];

for (let i = 0; i < arr; i++) {
  switch (arr[i]) {
    case 'pop':
      // 단축 평가: 첫 번째 피연산자가 true
      result.push(stack.pop() || -1);
      break;

    case 'size':
      result.push(stack.length);
      break;

    case 'empty':
      result.push(stack[0] ? 0 : 1);
      break;

    case 'top':
      result.push(stack[stack.length - 1] || -1);
      break;

    // 값이 숫자일 필요는 없습니다. 따라서 숫자로 변환하는 식이 없어도 됩니다.
    default:
      stack.push(arr[i].split(" ")[1]);
      break;
  }
}

console.log(result.join('\n'));