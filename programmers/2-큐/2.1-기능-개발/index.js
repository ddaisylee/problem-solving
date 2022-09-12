function solution(progresses, speeds) {
  const result = [];
  let count = 1;
  // 배열의 요소에 어떤 처리를 해서 새로운 배열을 만드는거면 for문 말고 map을 써도 된다.
  const days = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]));

  let max = days[0];
  for (let i = 1; i <= days.length; i++) {
    if (max >= days[i]) {
      count++;
      // days[i]가 더 크면 max를 days[i]
    } else {
      max = days[i];
      result.push(count);
      count = 1;
    }
  }
  return result;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

