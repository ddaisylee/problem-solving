function solution(s) {
    const arr = s.split(' ');
    const newArr = arr.map(el => {
        return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
    })
    return newArr.join(' ');
}
// 중간에 대문자가 들어가있을 수도 있으니까 전부 소문자로 바꿔줘야함