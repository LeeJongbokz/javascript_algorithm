var longestCommonPrefix = function(strs) {
    
    let answer = "";
    let minLen = 200;
    
    for(let i=0; i<strs.length; i++){
        let len = strs[i].length;
        minLen = Math.min(minLen, len);
    }
    
    for(let i=1; i<=minLen; i++){
        let set = new Set();
        
        let s = "";
        
        for(let j=0; j<strs.length; j++){
            s = strs[j].substring(0, i);
            set.add(s);
        }
        
        if(set.size === 1){
            answer = s;
        }else{
            break;
        }
        
    }
    
    return answer; 
    
};
