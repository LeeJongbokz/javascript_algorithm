// 35. Search Insert Position
// https://leetcode.com/problems/search-insert-position/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// const nums = [1, 3, 5, 6],
//   target = 5;

// const nums = [1, 3, 5, 6],
//   target = 2;

const nums = [1, 3, 5, 6],
  target = 7;

var searchInsert = function (nums, target) {
  let answer = nums.indexOf(target);
  if (answer !== -1) return answer;
  // 마지막일 경우
  if (target >= nums[nums.length - 1]) return nums.length;
  // 처음일 경우
  if (target < nums[0]) return 0;

  nums.forEach((elem, idx) => {
    if (target > elem && target <= nums[idx + 1]) answer = idx + 1;
  });

  return answer;
};
console.log(searchInsert(nums, target));
