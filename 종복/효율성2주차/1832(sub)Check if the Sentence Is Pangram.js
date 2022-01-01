var checkIfPangram = function(sentence) {
    
    let answer = true;
    
    let arr = new Array(30).fill(0);
    
    for(let i=0; i<sentence.length; i++){
        let num = sentence[i].charCodeAt()-97;
        arr[num] += 1;
    }
    
    
    for(let i=0; i<26; i++){
        if(arr[i] === 0){
            answer = false;
            break;
        }
    }
    
    return answer;
    
    
};
