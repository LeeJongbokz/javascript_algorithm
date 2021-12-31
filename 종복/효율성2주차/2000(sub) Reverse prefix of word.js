var reversePrefix = function(word, ch) {
    
    
    let pos = 0; 
    
    for(let i=0; i<word.length; i++){
        if(word[i] === ch){
            pos = i;
            break;
        }
    }
    
    return word.substring(0, pos+1).split("").reverse().join("") + word.substring(pos+1);
    
    
};
