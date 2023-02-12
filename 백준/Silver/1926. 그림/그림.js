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

const queue = new Queue();

const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false)
);

let direction = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

let count = 0;
const widthArray = [];

const BFS = (start) => {
  queue.enqueue(start);
  let width = 0;

  while (!queue.isEmpty()) {
    let [y, x] = queue.dequeue();
    if (visited[y][x]) continue;
    visited[y][x] = true;
    width++;

    for (let i = 0; i < direction.length; i++) {
      let [dy, dx] = [y + direction[i][0], x + direction[i][1]];

      if (dy < 0 || dx < 0 || dy >= n || dx >= m) continue;
      if (visited[dy][dx]) continue;
      if (input[dy][dx] === 1) {
        queue.enqueue([dy, dx]);
      }
    }
  }

  if (width) {
    count++;
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
if (!count) return console.log(0 + "\n" + 0);
console.log(count + "\n" + Math.max(...widthArray))