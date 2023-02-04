function solution(n,a,b){ 
    const isPair = (a, b) => {
        let isOdd = Math.min(a, b) % 2 === 1;
        let difference = Math.abs(a - b) === 1;
        return isOdd && difference;
    }
    
    let round = 1;
    
    while(a !== b) {
        if(isPair(a, b)) break;
        
            a = Math.ceil(a / 2);
            b = Math.ceil(b / 2);
            round++;
        }
    return round;
}