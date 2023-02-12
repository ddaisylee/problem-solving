const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((value) => +value));

const [n, m] = input.shift();

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(value) {
    this.queue[this.rear++] = value;
  }
  dequeue() {
    return this.queue[this.front++]
  }
  isEmpty() {
    return this.front === this.rear;
  }
}

const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false)
);

let direction = [
  [1, 0], //좌
  [-1, 0], //우
  [0, 1], //상
  [0, -1], //하
];

let num = 0;
const widthArray = [];
const queue = new Queue();

const BFS = (start) => {
  queue.enqueue(start);
  let width = 0;

  while (!queue.isEmpty()) {
    let [x, y] = queue.dequeue();
    if (visited[x][y]) continue;
    visited[x][y] = true;
    width++;

    // 상, 하, 좌, 우를 체크하는 로직
    for (let i = 0; i < direction.length; i++) {
      let [dx, dy] = [x + direction[i][0], y + direction[i][1]];

      if (dx < 0 || dy < 0 || dx >= n || dy >= m) continue;
      if (visited[dx][dy] || input[dx][dy] !== 1) continue;
      queue.enqueue([dx, dy]);
    }
  }

  if (width) {
    num++;
    widthArray.push(width);
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (input[i][j] === 1 && !visited[i][j]) {
      BFS([i, j]);
    }
  }
}
if (!answer) return console.log(0 + "\n" + 0);
console.log(num + "\n" + Math.max(...widthArray))