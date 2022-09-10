// for 반복문을 이용한 풀이
function solution(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) result.push(arr[i]);
  }
  return result;
}

// array.filter 메서드를 이용한 풀이
function solution(arr) {
  return arr.filter((el, idx) => el !== arr[idx + 1])
}