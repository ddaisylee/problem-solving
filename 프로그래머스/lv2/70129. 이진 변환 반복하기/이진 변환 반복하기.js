function solution(s) {
    let count = 0;
    let removedZero = 0;
    
    while(s.length !== 1){
        const removedLength = s.split('0').join('').length;
        removedZero += s.length - removedLength;
        count++;
        s = removedLength.toString(2);
    }
    return [count, removedZero];
}
    
// number.toString(radix) -> radix 정수값의 진수로 표현