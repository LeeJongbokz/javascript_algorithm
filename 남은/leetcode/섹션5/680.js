// 680. Valid Palindrome II
// https://leetcode.com/problems/valid-palindrome-ii/

// const s = "aba";
// const s = "abca";
const s = "abc";
// const s = "tebbem";
// const s = "abca";

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  s = [...s];
  const charMap = new Map();

  s.forEach((elem) => {
    if (charMap.get(elem)) {
      const num = charMap.get(elem);
      charMap.set(elem, num + 1);
    } else {
      charMap.set(elem, 1);
    }
  });

  console.log({ charMap });

  let oddCount = 0;
  charMap.forEach(function (value, key) {
    if (value % 2 !== 0) oddCount++;
  });
  console.log({ oddCount });
  if ((oddCount - 1) % 2 !== 0) return false;

  return true;
};
console.log(validPalindrome(s));
