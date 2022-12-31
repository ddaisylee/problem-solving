function solution(participant, completion) {
    const map = new Map();
    
    participant
        .forEach(person => {
            map.set(person, (map.get(person) || 0) + 1)
    })
    
    completion.forEach(person => {
        map.set(person, map.get(person) - 1)
        if(map.get(person) === 0) map.delete(person)
    })
    
    const answer = [...map.keys()]
    return answer[0]
}

// 맵으로 participant에서 인원수를 더해준다.
// completion을 순회해 같은 인원수를 빼준다. 키가 남아있는 게 바로 완주하지 못한 선수다.