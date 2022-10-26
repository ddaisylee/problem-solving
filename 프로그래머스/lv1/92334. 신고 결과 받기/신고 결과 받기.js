function solution(id_list, report, k){
    const answer = new Array(id_list.length).fill(0);
    const report_list = {};
    
    id_list.map(id => report_list[id] = []);
    
    report.map(user => {
        const [user_id, report_id] = user.split(' ');
        if(!report_list[report_id].includes(user_id)) report_list[report_id].push(user_id);
    })
    
    for(let key in report_list) {
        if(report_list[key].length >= k){
            report_list[key].map(user => answer[id_list.indexOf(user)] += 1);
        }
    }
    
    return answer;
}