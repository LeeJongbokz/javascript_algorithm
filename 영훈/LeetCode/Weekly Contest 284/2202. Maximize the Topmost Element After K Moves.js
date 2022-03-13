/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maximumTop = function(nums, k) {
  let temp = [];
  if (nums.length === 1 && k % 2 === 1) return -1;
  if (k === 0) return nums[0];
  if (k > nums.length) return Math.max(...nums);
  for (let i = 0; i < k; i++) {
      let max = Math.max(...temp);
      if (i === k - 1) {
          if (nums[1] > max) return nums[1];
          else return max;
      } else {
          let num = nums.shift();
          temp.push(num);
      }
      if (nums.length === 0) {
          nums.push(max);
      }
  }
};