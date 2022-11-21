function solution(cacheSize, cities) {
    let time = 0;
    let cache = [];
    let citiesArr = cities.map(el => el.toLowerCase());
    
    for(let i = 0; i < citiesArr.length; i++){
        if(!cache.includes(citiesArr[i])){
            time += 5;
            cache.push(citiesArr[i]);
            if(cache.length > cacheSize){
                cache.shift();
            }
        } else {
            time++;
            let index = cache.indexOf(citiesArr[i]);
            cache.splice(index, 1);
            cache.push(citiesArr[i]);
        }
    }
    return time;
}