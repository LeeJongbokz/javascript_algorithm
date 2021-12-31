
var wordPattern = function(pattern, s) {
    
    
    let answer = true;
    let map = new Map();
    let set = new Set(); 
    
    let splits = s.split(" ");
    
    if(pattern.length !== splits.length){
        answer = false;
        return answer;
    }
    
    for(let i=0; i<pattern.length; i++){
        let word = pattern[i];
        
        if(map.has(word)){
            if(map.get(word) === splits[i]){
                continue;
            }else{
                answer = false;
                break;
            }
        }else{
            
            if(set.has(splits[i])){
                answer = false;
                break;
            }else{
                map.set(word, splits[i]);
                set.add(splits[i]);
            }
            
        }
    }
    
    return answer;
    
    
};
