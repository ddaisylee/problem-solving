function solution(people, limit){
	let boats = 0;
    let left = 0;
    let right = people.length-1;
    
    people.sort((a,b) => b- a);
    
    while(left < right){
    	let sum = people[left] + people[right];
        
        if(sum > limit){
        	left++;
        } else {
        	left++;
            right--;
        }
        boats++;
    }
    if(left === right) boats++; 
    return boats;
}