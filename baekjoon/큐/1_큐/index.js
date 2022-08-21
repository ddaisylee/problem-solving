const arr = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const n = arr.shift();

const queue = [];
const result = [];

function solution(n, arr) {
  for (let i = 0; i < n; i++) {
    switch (arr[i]) {
      case 'pop':
        result.push(queue.shift() || -1);
        break;
      case 'size':
        result.push(queue.length);
        break;
      case 'empty':
        result.push(!queue.length ? 1 : 0);
        break;
      case 'front':
        result.push(queue[0] || -1);
        break;
      case 'back':
        result.push(queue[queue.length - 1] || -1);
        break;
      default:
        queue.push(arr[i].split(' ')[1]);
    }
  }
  console.log(result.join('\n'));
}

solution(n, arr);