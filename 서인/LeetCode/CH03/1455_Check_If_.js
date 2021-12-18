// Check If a Word Occurs As a Prefix of Any Word in a Sentence
// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/


/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
 var isPrefixOfWord = function(sentence, searchWord) {
    let arr = sentence.split(' ');
    let n = arr.length;
    let m = searchWord.length;
    
    for (let i=0; i<n; i++){
        let cnt = 0;
        for (let j=0; j < m; j++){
            if (arr[i][j] === searchWord[j]){
                cnt++;
            }
        }
        
        if (cnt === m) {
            return (answer = i + 1)
        } else {
            answer = -1;
        }
    }
    
    return answer;

};