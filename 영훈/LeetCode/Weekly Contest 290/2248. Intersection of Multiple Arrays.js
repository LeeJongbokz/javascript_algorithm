/**
 * @param {number[][]} nums
 * @return {number[]}
 */
 var intersection = function(nums) {
  let arr = [...nums[0]];
  
  for (let i = 1; i < nums.length; i++) {
      arr = arr.filter(v => nums[i].includes(v));
  }
  
  return arr.sort((a, b) => a - b);
};