
var areOccurrencesEqual = function(s) {
    
    
    let arr = new Array(30).fill(0);
    let set = new Set();
    
    for(let i=0; i<s.length; i++){
        let pos = s[i].charCodeAt()-97;
        arr[pos] += 1;
    }
    
    for(let i=0; i<26; i++){
        if(arr[i] !== 0){
            set.add(arr[i]);
        }else{
            continue;
        }
    }
    
    if(set.size === 1){
        return true;
    }else{
        return false;
    }
    
};
