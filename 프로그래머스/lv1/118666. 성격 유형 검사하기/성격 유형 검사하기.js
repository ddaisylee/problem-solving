function solution(survey, choices) {
    let types = {R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0};
    let result = '';
    
    for(let i = 0; i < choices.length; i++){
        // 4보다 작으면 왼쪽 유형에 점수를 카운트
        if(choices[i] < 4) { 
            types[survey[i][0]] += Math.abs(4 - choices[i])
        } else {
            // 4보다 크면 오른쪽 유형에 점수를 카운트
            types[survey[i][1]] += Math.abs(4 - choices[i])
        }
    }
    console.log(types);
    
    // 지표를 순서대로 리턴해야 하므로 for 반복문을 돌린다
    let indicators = ['RT', 'CF', 'JM', 'AN'];
    for(let i of indicators) {
        if(types[i[0]] >= types[i[1]]) {
            result += i[0]
        } else {
            result += i[1]
        }
    }
    return result;
}
// 123: 왼쪽 567: 오른쪽 -> 4를 기준으로 구분하기
// ["AN", "CF", "MJ", "RT", "NA"]	[5, 3, 2, 7, 5]	"TCMA"
// 5 - 4