function solution(progresses, speeds) {
    const result = [];
    let count = 1;
    const days = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]));
    let maxDay = days[0];
    
    for(let i = 1; i <= days.length; i++){
        if(maxDay >= days[i]){
            count++;
        } else {
            maxDay = days[i];
            result.push(count);
            count = 1;
        }
    }
    return result;
}