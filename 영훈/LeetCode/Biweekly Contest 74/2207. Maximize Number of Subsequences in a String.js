/**
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */
 var maximumSubsequenceCount = function(text, pattern) {
  let sum = 0;
  let first = 0;
  let second = 0;
  
  for (let i = 0; i < text.length; i++) {
      if (text[i] === pattern[1]) {
          second++;
          sum += first;
      }
      if (text[i] === pattern[0]) {
          first++;
      }
  }
  
  sum += Math.max(first, second);
  
  return sum;
};