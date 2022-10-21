// function solution(n, m) {
//     let a = Math.max(n,m);
//     let b = Math.min(n,m);
    
//     // 최대공약수
//     function gcd(a, b){
//         let remainder;
//         while(a % b > 0) {
//             remainder = a % b;
//             a = b;
//             b = remainder;
//         }
//         return b;
//     }
    
//     // 최소공배수 
//     function lcm(a, b){
//         let k = gcd(a, b);
//         return (a * b) / k
//     }
    
//     return [gcd(a, b), lcm(a, b)]
// }


function solution(a, b) {
    var r;
    for(var ab= a*b;r = a % b;a = b, b = r){}
    return [b, ab/b];
}