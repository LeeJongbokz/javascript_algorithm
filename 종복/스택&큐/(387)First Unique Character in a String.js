var firstUniqChar = function(s) {
    
    let answer = -1;
    
    let arr = new Array(30).fill(0);
    
    for(let i=0; i<s.length; i++){
        let pos = s.charCodeAt(i)-97;
        arr[pos] += 1;
    }
     
    for(let i=0; i<s.length; i++){
        
        let pos = s.charCodeAt(i)-97;
        
        if(arr[pos] === 1){
            answer = i;
            break;
        }
    }
    
    return answer;
    
};
