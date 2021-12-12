var longestPalindrome = function(s) {
  let answer = '';
  let currentString = '';
  
  const checkPalindromic = (s) => {
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
      if (s[i] !== s[s.length - 1 - i]) return false;
    }
    return true;
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      currentString += s[j];
      if (checkPalindromic(currentString) && (currentString.length > answer.length)) answer = currentString;
    }
    currentString = '';
  }
  
  return answer;
};

let s = "babad";
console.log(longestPalindrome(s));