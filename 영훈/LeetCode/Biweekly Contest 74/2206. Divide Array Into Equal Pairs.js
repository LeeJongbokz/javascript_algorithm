/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var divideArray = function(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) i++;
      else return false;
  }
  return true;
};