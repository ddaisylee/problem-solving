const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
let arr = input[1].split(' ').map(val => +val).sort((a, b) => a - b);
const x = +input[2];

function solution(arr, x) {
  let left = 0;
  let right = arr.length - 1
  let count = 0;

  // left와 right가 같아지는 순간 while문이 종료됩니다.
  while (left !== right) {
    let sum = arr[left] + arr[right];
    // sum이 x와 같으면
    if (sum === x) {
      count++;
      // while문을 진행시키기 위해 left를 한 칸 왼쪽으로 이동합니다.
      left++;
      // sum이 x보다 크다면 right를 한 칸 왼쪽으로 이동합니다.
    } else if (sum < x) {
      left++
      // sum이 x보다 작으면 left를 한 칸 오른쪽으로 이동합니다.
    } else {
      right--;
    }
  }
  console.log(count);
}

solution(arr, x);