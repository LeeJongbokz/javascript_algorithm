// 415. Add Strings
// https://leetcode.com/problems/add-strings/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    
    let n1 = num1.length -1;
    let n2 = num2.length -1;
    let carry = 0;
    let result = '';
    
    while (n1 >= 0 || n2 >= 0){
        let number1 = (n1 >= 0) ? num1[n1] - '0' : 0;
        let number2 = (n2 >= 0) ? num2[n2] - '0' : 0;
        
        n1--;
        n2--;
        
        let sum = number1 + number2 + carry;
        result += (sum%10);
        carry = Math.floor(sum/10);
          
    }
    
    if (carry !== 0){
        result += carry;
    }
    
    return result.split('').reverse().join('');
};