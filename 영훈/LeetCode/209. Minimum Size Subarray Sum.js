/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
  let answer = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let left = 0;
  
  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      while (sum >= target) {
          answer = Math.min(answer, i + 1 - left);
          sum -= nums[left++];
      }
  }
  return answer !== Number.MAX_SAFE_INTEGER ? answer : 0;
};