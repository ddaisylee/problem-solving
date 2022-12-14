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

function solution(s) {
  const obj = {};
  const answer = [];
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] != null) answer[i] = i - obj[s[i]];
    else answer[i] = -1;
    obj[s[i]] = i;
  }
  return answer;
}