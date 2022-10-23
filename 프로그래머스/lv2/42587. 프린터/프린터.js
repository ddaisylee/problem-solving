function solution(priorities, location) {
    let count = 0;
    
    while (true) {
        let first = priorities.shift();
        if (priorities.filter((el) => first < el).length) {
            priorities.push(first);
        } else {
            count++;
            if (location === 0) {
                return count;
            }
        }
        location--;
        if (location === -1) {
            location = priorities.length - 1;
        }
    }
    return answer;
}

