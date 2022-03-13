/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
 var findKDistantIndices = function(nums, key, k) {
  let save = [];
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === key) save.push(i);
  }
  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < save.length; j++) {
          let find = answer.find((v) => v === i);
          if (find !== undefined) break;
          if (Math.abs(i - save[j]) <= k) answer.push(i);  
      }
  }
  
  return answer;
};