function solution(array, commands) {
    const result = [];
    for(let x = 0; x < commands.length; x++){
        let i = commands[x][0] - 1;
        let j = commands[x][1];
        let k = commands[x][2] - 1;
        
        const newArr = array.slice(i, j).sort((a,b) => a - b);
        let number = newArr.find((_, idx) => idx === k);
        result.push(number);
        console.log(result);
    }
    return result;
}