// https://leetcode.com/problems/maximum-average-subarray-i/
// 643. Maximum Average Subarray I

// k 숫자만큼 길이의 연속된 숫자 중 그 평균값이 최대를 구해라
// 연속된 k길이의 수 합 중 제일 큰 합을 구하면 됨
// 평균은 소수점 5째자리까지

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// const nums = [1, 12, -5, -6, 50, 3],
//   k = 4;
// const nums = [5],
//   k = 1;
// const nums = [0],
// const nums = [-1],
//   k = 1;

const nums = [9, 7, 3, 5, 6, 2, 0, 8, 1, 9],
  k = 6;

//   const nums = [5], k = 1
var findMaxAverage = function (nums, k) {
  let start = 0,
    big = 0;
  let total = 0;

  for (let idx = 0; idx < k; idx++) {
    total += nums[idx];
    start++;
  }
  big = total;

  if (nums.length === k) {
    return (total / k).toFixed(5);
  }

  while (start < nums.length) {
    // 앞에 빼고, 뒤에 더하고
    total -= nums[start - k];
    total += nums[start];

    if (total > big) {
      big = total;
    }

    start++;
  }

  return (big / k).toFixed(5);
};

console.log(findMaxAverage(nums, k));
