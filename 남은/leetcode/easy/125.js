// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */

// 굳이 이렇게 안 하고 한 스트링에서 앞 뒤로 요소들 빼서 비교해도 됐을듯

// const s = "A man, a plan, a canal: Panama";
// const s = "race a car";
// const s = " ";
const s = "aa";

var isPalindrome = function (s) {
  s = s.replace(/[\W_]+/g, "").toLowerCase();
  s = [...s];
  const sLest = s.splice(s.length / 2);
  if (sLest.length % 2 === 1 && s.length % 2 === 0) sLest.shift();
  while (s.length) {
    const first = s.shift();
    const second = sLest.pop();
    if (first !== second) return false;
  }

  return true;
};

console.log(isPalindrome(s));
