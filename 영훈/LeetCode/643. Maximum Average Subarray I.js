/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findMaxAverage = function(nums, k) {
  let answer = 0;
  let sum = 0;
  
  for (let i = 0; i < k; i++) {
      sum += nums[i];
  }
  answer = sum / k;
  
  for (let i = k; i < nums.length; i++) {
      sum += (nums[i] - nums[i - k]);
      answer = Math.max(answer, sum / k);
  }
  
  return answer;
};