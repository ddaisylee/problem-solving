function solution(s) {
    const stack = [];
    
    for(let i = 0; i < s.length; i++){
        // 스택이 비어있으면 || 스택의 마지막 요소와 문자열이 같지 않으면
        if(!stack.length || s[i] !== stack[stack.length - 1]) stack.push(s[i])
        // 스택의 마지막 요소와 문자열이 같으면 스택에서 꺼냅니다.
        else stack.pop();
    }
    return stack.length ? 0 : 1;
}