
var mergeAlternately = function(word1, word2) {
    
    let answer = "";
    
    let len = Math.max(word1.length, word2.length);
    
    let len1 = word1.length;
    let len2 = word2.length; 
    
    let i = 0; 
    
    while(1){
        
        if(i === len){
            break;
        }
    
        if(i < len1){
            answer += word1[i];
        }
        
        if(i < len2){
            answer += word2[i];
        }
        
        i += 1;
        
    }
    
    return answer; 
    
    
};
