var countConsistentStrings = function(allowed, words) {
    
    
    let cnt = 0; 
    
    for(let i=0; i<words.length; i++){
        
        let isAllowed = true;
        
        for(let j=0; j<words[i].length; j++){
            let word = words[i][j];
            
            if(allowed.includes(word)){
                continue;
            }else{
                isAllowed = false;
                break;
            }
        }
        
        if(isAllowed === true){
            cnt += 1;
        }
    }
    
    return cnt; 
    
};
