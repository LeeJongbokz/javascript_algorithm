/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
  const swap = (i, j) => {
      [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  
  let left = 0;
  let mid = 0;
  let right = nums.length - 1;
  
  while (mid <= right) {
      const current = nums[mid];
      if (current === 0) {
          swap(left, mid);
          left++;
          mid++
      } else if (current === 2) {
          swap(mid, right);
          right--;
      } else {
          mid++;
      }
  }
  
};