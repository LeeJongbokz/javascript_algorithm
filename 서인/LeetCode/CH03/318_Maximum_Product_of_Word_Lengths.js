// Maximum Product of Word Lengths
// https://leetcode.com/problems/maximum-product-of-word-lengths/


/**
 * @param {string[]} words
 * @return {number}
 */
 var maxProduct = function(words) {
    
    let answer = 0;
    
    function sameWord(a, b) {
        let arr = a.split('');
        let answer = true;
        
        for (let x of arr) {
            if (b.includes(x)) {
                answer = false;
                return answer;
            } 
        }
        return answer;
    }

    let max = 0;

    for (let i = 0; i < words.length; i++){
        let tmp;
        for (let j = i + 1; j < words.length; j++){
            if (sameWord(words[i], words[j])){
                tmp = (words[i].length * words[j].length)
            }
            
            if (tmp > max) max = tmp;
        }
        
    }
    
    answer = max;
    return answer; 
};