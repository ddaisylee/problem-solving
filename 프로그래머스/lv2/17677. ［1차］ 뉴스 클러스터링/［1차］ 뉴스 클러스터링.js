function solution(str1, str2) {
    // 대문자로 통일
    [str1, str2] = [str1.toUpperCase(), str2.toUpperCase()];
    // 두 글자씩 끊어서 담을 배열
    let arr1 = [];
    let arr2 = [];
    
    // 두 글자씩 끊은 문자가 모두 영문자일 때만 배열에 push
    for(let i = 0; i < str1.length - 1; i++){
        let testStr = str1.slice(i, i + 2)
        if(testStr.search(/[^A-Z]/g) < 0) arr1.push(testStr)
    }
    
     for(let i = 0; i < str2.length - 1; i++){
        let testStr = str2.slice(i, i + 2)
        if(testStr.search(/[^A-Z]/g) < 0) arr2.push(testStr)
    }
    
    let intersection = 0;
    let union = 0;
    let set = new Set([...arr1, ...arr2]);
    
    set.forEach(item => {
        elementOfArr1 = arr1.filter(val => val === item).length;
        elementOfArr2 = arr2.filter(val => val === item).length;
        
        union += Math.max(elementOfArr1, elementOfArr2);
        intersection += Math.min(elementOfArr1, elementOfArr2);
    })    
    console.log('교집합:',intersection, '합집합:',union)
    return union === 0 ? 65536 : Math.floor(intersection / union * 65536)
}
