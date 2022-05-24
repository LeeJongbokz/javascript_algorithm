// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */

// classic dp question

const n = 2;
// const n = 3;

var climbStairs = function (n) {
  const answer = [0, 1, 2, 3];
  if (answer[n]) return answer[n];

  for (let idx = 4; idx <= n; idx++) {
    const elem = answer[idx - 2] + answer[idx - 1];
    answer[idx] = elem;
  }

  return answer[n];
};
console.log(climbStairs(n));
