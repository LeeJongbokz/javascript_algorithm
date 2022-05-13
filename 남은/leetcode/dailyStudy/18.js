// 18. 4Sum
// https://leetcode.com/problems/4sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

// const nums = [1, 0, -1, 0, -2, 2],
//   target = 0;

const nums = [2, 2, 2, 2, 2],
  target = 8;

// two pointers

var fourSum = function (nums, target) {
  const answer = [];
  const memo = {};

  let sum = 0;

  nums.sort((a, b) => a - b);
  //   console.log({ nums });

  for (let idx = 0; idx < nums.length; idx++) {
    for (let idx2 = 0; idx2 < nums.length; idx2++) {
      let left = idx2 + 1,
        right = nums.length - 1;

      while (left < right) {
        sum = nums[idx] + nums[idx2] + nums[left] + nums[right];
        if (sum === target) {
          const key = `${nums[idx]},${nums[idx2]},${nums[left]},${nums[right]}`;
          if (!memo[key]) {
            memo[key] = true;
            answer.push([nums[idx], nums[idx2], nums[left], nums[right]]);
          }
          left++;
        } else if (sum < target) {
          right--;
        } else if (sum > target) {
          left++;
        }
      }
    }
  }

  return answer;
};
console.log(fourSum(nums, target));
