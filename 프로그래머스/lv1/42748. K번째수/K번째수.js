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

function sollution(array, commands){
    const result = commands.map(command => {
        const [i, j, k] = command;
        const number = array.slice(i - 1, k).sort((a, b) => a - b).find((_, idx)=> idx === k - 1);
        return number
    })
    return result
}