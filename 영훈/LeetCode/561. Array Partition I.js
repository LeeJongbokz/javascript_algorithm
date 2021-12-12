var arrayPairSum = function(nums) {
  let answer = 0;
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < nums.length; i++) {
      if (i % 2 === 0) {
          answer += nums[i];
      }
  }
  
  return answer;
};