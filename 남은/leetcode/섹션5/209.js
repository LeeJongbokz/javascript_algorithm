// 209. Minimum Size Subarray Sum
// https://leetcode.com/problems/minimum-size-subarray-sum/

// 연속된 숫자 중 타겟이상의 조합 중 가장 적은 길이의 서브어레이 길이 출력
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

const target = 7,
  nums = [2, 3, 1, 2, 4, 3];
// const target = 4,
//   nums = [1, 4, 4];
// const target = 11,
//   nums = [1, 1, 1, 1, 1, 1, 1, 1];
// const target = 11,
//   nums = [1, 1, 1, 1, 1, 1, 1, 1];

var minSubArrayLen = function (target, nums) {
  if (nums.find((item) => item >= target)) return 1;

  let answer = Number.MAX_SAFE_INTEGER;
  let noAnswer = true;

  let start = 0;
  while (start < nums.length) {
    let sum = 0;
    const compArr = [];

    for (let idx = start; idx < nums.length; idx++) {
      sum += nums[idx];
      compArr.push(nums[idx]);
      if (sum >= target && compArr.length < answer) {
        noAnswer = false;
        if (compArr.length === 1) return 1;
        answer = compArr.length;
      }
    }
    start++;
  }
  return noAnswer ? 0 : answer;
};

console.log(minSubArrayLen(target, nums));
