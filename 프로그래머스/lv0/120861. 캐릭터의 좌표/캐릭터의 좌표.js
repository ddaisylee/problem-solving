function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    
    const range = 
          [Math.floor(board[0] / 2), 
           Math.floor(board[1] / 2)];
    
    for(let key of keyinput){
        switch(key){
            case "right": x++; break;
            case "left": x--; break;
            case "up": y++; break;
            case "down": y--; break;
        }
        
        if(Math.abs(x)>range[0]){
            x = x > 0 ? range[0] : range[0] * -1;
         }
        if(Math.abs(y)>range[1]){
            y = y > 0 ? range[1] : range[1] * -1;
        }
        
    }
    return [x,y];
}