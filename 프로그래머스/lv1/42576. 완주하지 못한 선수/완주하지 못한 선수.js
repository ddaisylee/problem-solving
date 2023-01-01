// 다른 사람의 풀이를 참고해 리팩토링
function solution(participant, completion) {
    const map = new Map();
    
    participant
        .forEach(person => {
            map.set(person, (map.get(person) || 0) + 1)
    })
    
    completion.forEach(person => {
        map.set(person, map.get(person) - 1)
    })
    
    for(let [key, value] of map) {
        if(value > 0) return key;
    }
}



// function solution(participant, completion) {
//     const map = new Map();

//     for(let i = 0; i < participant.length; i++) {
//         let a = participant[i], 
//             b = completion[i];
        
//         map.set(a, (map.get(a) || 0) + 1);
//         map.set(b, (map.get(b) || 0) - 1);
//     }

//     for(let [key, value] of map) {
//         if(value > 0) return key;
//     }

// }