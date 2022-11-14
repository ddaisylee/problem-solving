function solution(record) {
    const users = {};
    const result = [];
    const chattingMsgObj = {
        Enter: "님이 들어왔습니다.",
        Leave: "님이 나갔습니다."
    }
    
    for(let el of record){
        const [chattingMsg, uid, nickname] = el.split(' ');
        if(chattingMsg !== 'Change') result.push([chattingMsg, uid]);
        if(nickname) users[uid] = nickname;
        
    }
    // 구조분해할당?
    return result.map(([chattingMsg, uid])=> `${users[uid]}${chattingMsgObj[chattingMsg]}`)
}