// https://leetcode.com/problems/contains-duplicate/
// 217. Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// const nums = [1, 2, 3, 1];
const nums = [1, 2, 3, 4];
// const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

var containsDuplicate = function (nums) {
  // indexOf를 쓰면 됨
  for (let idx = 0; idx < nums.length; idx++) {
    const elem = nums[idx];

    const idxDup = nums.indexOf(elem, idx + 1);
    if (idxDup !== -1) return true;
  }

  return false;
};
console.log(containsDuplicate(nums));
