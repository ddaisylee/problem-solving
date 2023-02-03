function solution(arr) {
    // 최대공약수
    const gcd = (a, b)=> {
        while(b > 0) {
            let reminder = a % b;
            a = b;
            b = reminder;
        }
        return a;
    }
    // 최소공배수
    const lcm = (a, b)=>{
        return a * b / gcd(a,b);
    }
    
    let result = 1;
    for(let i = 0; i < arr.length; i++) {
        result = lcm(result, arr[i])
    }
    return result;
}
