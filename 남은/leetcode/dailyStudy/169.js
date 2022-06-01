// 169. Majority Element
// https://leetcode.com/problems/majority-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
// more than ⌊n / 2⌋ times.

// const nums = [1];
// const nums = [3, 2, 3];
// const nums = [2, 2, 1, 1, 1, 2, 2];
const nums = [3, 3, 4];

var majorityElement = function (nums) {
  const numMap = new Map();
  const target = Math.floor(nums.length / 2);
  let big = Number.MIN_SAFE_INTEGER;

  nums.forEach((elem, idx) => {
    if (numMap.get(elem)) {
      const count = numMap.get(elem);
      if (idx !== 0 && idx === nums.length - 1 && count + 1 <= target) {
        numMap.delete(elem);
      } else numMap.set(elem, count + 1);
    } else if (idx === 0 || idx !== nums.length - 1) numMap.set(elem, 1);
  });

  for (const [key, value] of numMap) {
    //   console.log(key + " = " + value);
    if (numMap.size === 1) return key;
    if (value <= target) {
      numMap.delete(key);
    } else if (key > big) big = key;
  }
  return big;
};

console.log(majorityElement(nums));
