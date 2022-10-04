// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/?envType=study-plan&id=algorithm-iihttps://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/?envType=study-plan&id=algorithm-ii
// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// const nums = [5, 7, 7, 8, 8, 10],
//   target = 8;

// const nums = [5, 7, 7, 8, 8, 10],
//   target = 6;

// const nums = [],
//   target = 0;

const nums = [1],
  target = 1;

// 바이너리 서치
var searchRange = function (nums, target) {
  if (!nums.length) return [-1, -1];
  if (target < nums[0] || target > nums[nums.length - 1]) return [-1, -1];

  const answer = [];
  let left = 0;
  let right = nums.length - 1;
  let prevIdx = -1;
  let idx = Math.floor((left + right) / 2);

  while (answer.length !== 2) {
    idx = Math.floor((left + right) / 2);
    if (prevIdx === idx) break;
    // console.log({ prevIdx, idx });

    const num = nums[idx];
    if (num === target) {
      answer.push(idx);
      //   idx++;
      left++;
    }

    // idx 늘리기
    if (num < target) {
      left = idx;
    }
    // idx 줄이기
    if (num > target) {
      right = idx;
    }
    prevIdx = idx;
  }

  return answer.length ? answer : [-1, -1];
};
console.log(searchRange(nums, target));
