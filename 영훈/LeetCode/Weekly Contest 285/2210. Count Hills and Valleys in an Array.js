/**
 * @param {number[]} nums
 * @return {number}
 */
 var countHillValley = function(nums) {
  let answer = 0;
  for (let i = 1; i < nums.length - 1; i++) {
      // hill: 1, valley: 2
      let current = 0;
      if (nums[i - 1] < nums[i]) current = 1;
      else if (nums[i - 1] > nums[i]) current = 2;
      else if (nums[i - 1] === nums[i]) continue;
      for (let j = i + 1; j < nums.length; j++) {
          if (current === 1) {
              if (nums[i] === nums[j]) {
                  if (j === nums.length - 1) current = 0;
                  continue;
              }
              else if (nums[i] > nums[j]) current = 1;
              else current = 0;
              break;
          } else if (current === 2) {
              if (nums[i] === nums[j]) {
                  if (j === nums.length - 1) current = 0;
                  continue;
              }
              else if (nums[i] < nums[j]) current = 2;
              else current = 0;
              break;
          } else {
              break;
          }
      }
      if (current !== 0) answer++;
  }
  return answer;
};