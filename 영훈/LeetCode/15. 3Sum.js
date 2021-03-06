var threeSum = function(nums) {
  let answer = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let low = i + 1, high = nums.length - 1, sum = 0;
    while (low < high) {
      sum = nums[i] + nums[low] + nums[high];
      if (sum === 0) {
        answer.push([nums[i], nums[low], nums[high]]);
        while (nums[low + 1] === nums[low]) low++;
        while (nums[high - 1] === nums[high]) high--;
        low++;
        high--;
      } else if (sum < 0) low++;
      else high--;
    }
    while (nums[i+1] === nums[i]) i++;
  }

  return answer;
};

let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));