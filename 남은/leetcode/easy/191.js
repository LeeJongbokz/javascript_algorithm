// https://leetcode.com/problems/number-of-1-bits/
// 191. Number of 1 Bits

/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// const n = 00000000000000000000000000001011;
// const n = 00000000000000000000000010000000;
const n = 11111111111111111111111111111101;

var hammingWeight = function (n) {
  let answer = 0;
  n = n.toString(2);
  [...n].forEach((elem) => {
    if (elem !== "0") answer++;
  });

  return answer;
};
console.log(hammingWeight(n));
