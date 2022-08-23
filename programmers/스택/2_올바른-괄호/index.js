function solution(s) {
  const stack = [];

  for (let i of s) {
    // Refactor: 스택이 비어있을 때 닫는 괄호가 나오면 false를 리턴합니다.
    if (!stack.length && i === ')') return false;

    if (i === '(') stack.push(i);
    if (i === ')') stack.pop();
  }
  // Refactor: true 또는 false 리턴하는 경우 평가식만으로도 리턴할 수 있습니다.
  return stack.length === 0;
}

const s = '()()'
solution(s)

/**
 * 효율성에서 걸리는 이유:
 * 반복문 중간에 스택이 비어있을 때도 닫는 괄호가 나오면
 * false를 리턴해주는 것이 좋습니다.
 */