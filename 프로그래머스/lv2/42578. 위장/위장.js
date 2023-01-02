// 1. 맵을 생성한다.
// 2. 맵에 (개수 + 1)만큼 더해준다.
// 3. 곱한 다음 1을 빼준다.

function solution(clothes) {
    const map = new Map();
    
    for(const clothe of clothes) {
        const prev = map.get(clothe[1]);
        map.set(clothe[1], (prev || 1) + 1);
    }
    
    return [...map.values()].reduce((acc,cur) => acc * cur) - 1;
}