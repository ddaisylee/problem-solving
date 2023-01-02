function solution(nums) {
    const num = nums.length / 2;
    const size= new Set(nums).size;
    
    return num > size ? size : num
}

// num이 size보다 크면 size를 리턴
// num과 size가 같으면 아무거나 리턴 (num을 리턴하도록)
// num이 size보다 작으면 num을 리턴