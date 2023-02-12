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
        return this.queue[this.front++];
    }
    isEmpty() {
        return this.front === this.rear;
    }
}

function solution(n, edge) {
    const graph = new Array(n + 1).fill(0).map(_ => []);
    
    for(let [src, dest] of edge) {
        graph[src].push(dest);
        graph[dest].push(src);
    }
    const distance = new Array(n + 1).fill(0);
    distance[1] = 1;   
    
    // BFS
    const queue = new Queue();
    queue.enqueue(1);
    
    while(!queue.isEmpty()) {
        const src = queue.dequeue();
         
        for(let dest of graph[src]) {
            if(distance[dest] === 0) {
                distance[dest] = distance[src] + 1;
                queue.enqueue(dest);
            }
        }       
    }
    const max = Math.max(...distance);
    return distance.filter(el => el === max).length;
}