function solution(n, words) {
  let check = [];
  for (let i = 0; i < words.length; i++) {
    if (i === 0) check.push(words[i]);
    else if (
      !check.includes(words[i]) &&
      words[i - 1][words[i - 1].length - 1] === words[i][0]
    ) {
      check.push(words[i]);
    } else {
      return [(i % n) + 1, parseInt(i / n) + 1];
    }
  }

  return [0, 0];
}