function solution(today, terms, privacies) {
    const answer = [];
    const [today_year, today_month, today_day] = today.split(".").map(num => +num);
    const termsObj = {};
    
    terms.map(term => term.split(" "));
    
    for(let term of terms) {
        let [type, period] = term.split(" ");
        termsObj[type] = +period;
    }
    
    const privacies_days = privacies.map(privacie => privacie.split(' ')[0]);
    const privacies_type = privacies.map(privacie => privacie.split(' ')[1]);
    
    const getExpiredDate = (year, month, day, period)=> {
        month += period;
        day -= 1;
        
        if(day === 0) {
            month -= 1;
            day = 28;
        }
        
        if(month > 12) {
            const monthCount = Math.floor(month / 12);
            month = month - 12 * monthCount;
            year += monthCount;
        }
        
        if(month === 0) {
            month += 12;
            year -= 1;
        }
        
        return [year, month, day];
    }
    
    for(let i = 0; i < privacies.length; i++){
        let [year, month, day] = privacies_days[i].split(".").map(num => +num);
        let period = termsObj[privacies_type[i]];
        const [eYear, eMonth, eDay] = getExpiredDate(year, month, day, period);
        let expired = false;
        
        if(eYear < today_year) expired = true;
        if(eYear === today_year && eMonth < today_month) expired = true;
        if(eYear === today_year && eMonth === today_month && eDay < today_day) expired = true;
        
        if(expired) answer.push(i + 1);
    }
    return answer;
}

// 1. 년월일을 저장한다.
// 2. term의 종류와 개월수를 저장한다.
// 3. 오늘 날짜랑 privacies날짜 + 개월수를 비교해야 한다.
// 오늘 날짜를 split해서 담아야 한다. (약관 종류에 맞는 개월수를 더해야 한다.)
// 4. 년 -> 월 -> 일을 비교해서 하나라도 더 크면 answers 배열에 담는다.