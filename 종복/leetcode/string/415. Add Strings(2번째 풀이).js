/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    
    let answer = "";
    
    let len1 = num1.length;
    let len2 = num2.length;
    
    let carry = 0; 
    
    while(len1 !== 0 || len2 !== 0){
        
        let n1 = 0;
        let n2 = 0;
        
        if(len1 >= 1){
            n1 = Number(num1[len1-1]);
            len1 -= 1;
        }
        
        if(len2 >= 1){
            n2 = Number(num2[len2-1]);
            len2 -= 1;
        }
        
        let value = n1+n2+carry;
        
        
        if(value >= 10){
            carry = 1;
            value %= 10;
        }else{
            carry = 0;
        }
        
        answer += String(value);
    }
    
    
    if(carry === 1){
        answer += '1';
    }
    
    
    return answer.split("").reverse().join("");
    

    
};
