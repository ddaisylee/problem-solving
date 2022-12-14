// // 나의 풀이
// function solution(s) {
//     const arr = [];
//     const elements = s.split('');

//     for(let i = 0; i < s.length; i++){
//         const sliced = elements.slice(0, i);
//         if(sliced.includes(s[i])) {
//             let idxOfSame = sliced.lastIndexOf(s[i])
//             arr.push(i - idxOfSame)
//         } else {
//             arr.push(-1);   
//         }
//     }
//     return arr;
// }

// 다른 풀이
function solution(s){
    const obj = {};
    
    const answer = [...s].map((el, i) => {
        let result = obj[el] !== undefined ? i - obj[el] : -1
        // 해당 문자의 최신 인덱스를 저장하기 위해 프로퍼티값을 할당해준다.
        obj[el] = i;
        return result
    })
    return answer;
}