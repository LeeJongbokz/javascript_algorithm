// https://leetcode.com/problems/missing-number/
// 268. Missing Number
// 완전 신박한 방법
// https://leetcode.com/problems/missing-number/discuss/2049344/Simple-Javascript-solution
// 다 더한 다음에 차이 빼기

/**
 * @param {number[]} nums
 * @return {number}
 */
// const nums = [3, 0, 1];
// const nums = [0, 1];
const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

var missingNumber = function (nums) {
  //   const arr = Array.from({ length: n + 1 }, (v, i) => i);
  nums.sort();
  for (let idx = 0; idx < nums.length + 1; idx++) {
    const idxInNums = nums.indexOf(idx);
    if (idxInNums === -1) return idx;
  }

  // 다른 방식 시도했는데 실패
  //   for (let idx = 0; idx < nums.length; idx++) {
  //     const elem = nums[idx];
  //     if (idx === 0) {
  //       if (elem !== 0) return 0;
  //     } else {
  //       const prev = nums[idx - 1];
  //       if (elem - prev !== 1) return elem - 1;
  //     }
  //   }
  //   return nums.length;
};
console.log(missingNumber(nums));
