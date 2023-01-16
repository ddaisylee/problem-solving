function solution(sizes) {
    
    const longer = sizes.map(length => Math.max(...length));
    const shorter = sizes.map(length => Math.min(...length));
    const answer = (Math.max(...longer)) * (Math.max(...shorter));
    
    return answer;
}