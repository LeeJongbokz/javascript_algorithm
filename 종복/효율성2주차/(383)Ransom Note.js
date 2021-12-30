
var canConstruct = function(ransomNote, magazine) {
    
    let answer = true;
    
    let magazineMap = new Map();
    let ransomMap = new Map();
    
    for(let i=0; i<magazine.length; i++){
        
        let word = magazine[i];
        
        if(magazineMap.has(word)){
            magazineMap.set(word, magazineMap.get(word)+1);
        }else{
            magazineMap.set(word, 1);
        }
    }
    
    for(let i=0; i<ransomNote.length; i++){
        
        let word = ransomNote[i];
        
        if(ransomMap.has(word)){
            ransomMap.set(word, ransomMap.get(word)+1);
        }else{
            ransomMap.set(word, 1);
        }
    }
    
    for(let item of ransomMap){
        let word = item[0];
        
        if(magazineMap.has(word) && magazineMap.get(word) >= item[1]){
            continue;
        }else{
            answer = false;
            break;
        }
    }
    
    return answer; 
    
};
