function solution(brown, yellow) {
    let answer = [];
    
    brown-=4;
    brown/=2;
    
    for(let i=1; i<=brown; i++){
        for(let j=1; j<=brown; j++){
            if(i+j==brown && i*j==yellow && i>=j){
                answer=[i+2, j+2];
            }
        }
    }
    
    return answer;
}