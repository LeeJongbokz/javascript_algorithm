// https://leetcode.com/problems/two-sum/
// 1. Two Sum

// const nums = [2, 7, 11, 15],
//   target = 9;

const nums = [3, 2, 4],
  target = 6;

// const nums = [3, 3],
//   target = 6;

// const nums = [-3, 4, 3, 90],
//   target = 0;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// sort를 먼저 하면 더 좋았을 듯
var twoSum = function (nums, target) {
  const answer = [];

  nums.forEach((elem, idx) => {
    for (let index = idx + 1; index < nums.length; index++) {
      const elem2 = nums[index];
      if (elem + elem2 !== target) {
        // do nothing
      } else if (elem + elem2 === target) {
        answer.push(idx);
        answer.push(index);
      }
    }
  });
  return answer;
};

console.log(twoSum(nums, target));
