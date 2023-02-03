function solution(n,a,b){  
    const isPair = (numA, numB) => {
        let isOdd = Math.min(numA, numB) % 2 === 1;
        let difference = Math.abs(numA - numB) === 1;
        return isOdd && difference;
    }
    
    let round = 1;
    
    while(round < n / 2) {
        if(isPair(a, b)) {
            return round;
        } else {            
            a = Math.ceil(a / 2);
            b = Math.ceil(b / 2);
            round++;
        }
    }
    return round;
}