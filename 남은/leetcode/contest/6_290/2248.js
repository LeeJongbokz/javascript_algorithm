// 2248. Intersection of Multiple Arrays
// https://leetcode.com/contest/weekly-contest-290/problems/intersection-of-multiple-arrays/
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
// const nums = [
//   [3, 1, 2, 4, 5],
//   [1, 2, 3, 4],
//   [3, 4, 5, 6],
// ];

const nums = [
  [7, 34, 45, 10, 12, 27, 13],
  [27, 21, 45, 10, 12, 13],
];

var intersection = function (nums) {
  const answer = nums[0];

  nums.forEach((arr, idx) => {
    if (idx !== 0) {
      for (let subIdx = 0; subIdx < answer.length; subIdx++) {
        const num = answer[subIdx];
        if (!arr.includes(num)) {
          answer.splice(subIdx, 1);
          subIdx--;
        }
      }
    }
  });
  answer.sort(function (a, b) {
    return a - b;
  });
  return answer;
};
console.log(intersection(nums));
