// https://leetcode.com/problems/remove-element/
// 27. Remove Element

// const nums = [3, 2, 2, 3],
//   val = 3;

const nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2;

// const nums = [3, 3],
//   val = 5;
// const nums = [],
//   val = 3;
// const nums = [2],
//   val = 3;

// const nums = [0, 1, 2, 2, 3, 0, 4, 2],
//   val = 2;

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (nums.length === 0) return 0;
  let answer = nums.length;

  for (let idx = 0; idx < nums.length; idx++) {
    const elem = nums[idx];
    if (elem === "_") return answer;
    if (elem === val) {
      nums.splice(idx, 1);
      nums.push("_");
      answer--;
      idx--;
    }
  }

  return answer;
};
console.log(removeElement(nums, val));
