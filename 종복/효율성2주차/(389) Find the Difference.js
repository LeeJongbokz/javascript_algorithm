
var findTheDifference = function(s, t) {
    
    let answer = "";
    let arr1 = new Array(100).fill(0);
    let arr2 = new Array(100).fill(0);
    
    for(let i=0; i<s.length; i++){
        let num = s[i].charCodeAt()-97;
        arr1[num] += 1;
    }
    
    for(let i=0; i<t.length; i++){
        let num = t[i].charCodeAt()-97;
        arr2[num] += 1;
    }
    
    for(let i=0; i<26; i++){
        if(arr1[i] !== arr2[i]){
            answer += String.fromCharCode(97+i);
            break; 
        }else{
            continue;
        }
    }
    
    return answer;
    
};
