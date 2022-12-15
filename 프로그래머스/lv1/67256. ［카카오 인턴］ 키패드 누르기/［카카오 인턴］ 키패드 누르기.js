const solution = (numbers, hand) => {
  const answer = [];
  let leftPosition = '*'; //왼손 엄지손가락 시작 위치
  let rightPosition = '#'; //오른손 엄지손가락 시작 위치
    
// 타겟으로부터의 거리를 구하는 함수
const getDistance = (currentNumber, targetNumber) => {
  const keyPad = {
    1: [0, 0], 2: [0, 1], 3: [0, 2],
    4: [1, 0], 5: [1, 1], 6: [1, 2],
    7: [2, 0], 8: [2, 1], 9: [2, 2],
    '*': [3, 0], 0: [3, 1], '#': [3, 2],
  }

  const currentPosition = keyPad[currentNumber];
  const targetPosition = keyPad[targetNumber];

  return Math.abs(targetPosition[0] - currentPosition[0]) + Math.abs(targetPosition[1] - currentPosition[1]);
};
  numbers.forEach(number => {   
      // 1,4,7은 무조건 'L'
    if (number % 3 === 1) {
      answer.push('L');
      leftPosition = number;
      return;
    }
      // 3,6,9는 무조건 'R'
    if (number % 3 === 0 && number !== 0) {
      answer.push('R');
      rightPosition = number;
      return;
    }
    // 2,5,8,0에 대해서는 타겟으로부터의 거리 계산해서 비교
    const leftDistance = getDistance(leftPosition, number);
    const rightDistance = getDistance(rightPosition, number);
      
    if (leftDistance > rightDistance) {
      answer.push('R');
      rightPosition = number;
    } 
    if (leftDistance < rightDistance) {
      answer.push('L');
      leftPosition = number;
    }   
    // 거리가 같을 때는 왼손잡이/오른손잡이로 판단
    if (leftDistance === rightDistance) {
      if (hand === "right") {
        answer.push('R');
        rightPosition = number;
        return;
      }
      if (hand === 'left') {
        answer.push('L');
        leftPosition = number;
        return;
      }
    }
  });
  return answer.join("");
};