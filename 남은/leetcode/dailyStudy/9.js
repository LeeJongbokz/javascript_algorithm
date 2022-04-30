// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/

// const x = 121;
const x = -121;
// const x = 10;

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  x = [...x.toString()];

  const mid = Math.ceil(x.length / 2);
  const isOdd = x.length % 2 !== 0;
  let answer = true;

  const splitedNums = x.splice(0, mid);
  if (isOdd) splitedNums.pop(); // [1 2 / 2 1] // removed 3

  while (splitedNums.length) {
    const numFromFirstPart = splitedNums.pop();
    const numFromSencondPart = x.shift();

    if (numFromFirstPart !== numFromSencondPart) {
      answer = false;
      return answer;
    }
  }

  return answer;
};
console.log(isPalindrome(x));
