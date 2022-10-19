function solution(s) {
    const arr = s.split(' ');
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return `${min} ${max}`
}

// 두 수가 같으면?