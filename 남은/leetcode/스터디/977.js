// 977. Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/

const nums = [-4, -1, 0, 3, 10];

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// TODO: O(n) 으로 풀기
var sortedSquares = function (nums) {
  const answer = [];
  let big = 0;
  nums.forEach((n, idx) => {
    const elem = n * n;
    if (elem > big) answer.push(elem);
    else answer.unshift(elem);
    big = elem;
  });

  //   answer.sort(function (a, b) {
  //     return a - b;
  //   });

  return answer;
};
console.log(sortedSquares(nums));
