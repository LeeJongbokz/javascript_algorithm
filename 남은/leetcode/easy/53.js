// https://leetcode.com/problems/maximum-subarray/
// 53. Maximum Subarray

// 못 품
// dp 방법
// https://leetcode.com/problems/maximum-subarray/discuss/2026999/FAST-SIMPLE-or-DP-JavaScript-Solution-(Using-Dynamic-Programming)
// ->> 다시 보니 쉬운 방법이랑 차이가 없음
// 쉬운 방법
// https://leetcode.com/problems/maximum-subarray/discuss/2054378/Simple-javascript-solution
// -> 0보다 작아지면 0으로 초기화 하는게 포인트였음

/**
 * @param {number[]} nums
 * @return {number}
 */
// 가장 큰 합을 갖는 연속적인 하위 배열(최소한 하나의 숫자 포함)을 찾아 그 합을 반환합니다.
// dp
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // 6
// const nums = [1];
// const nums = [5, 4, -1, 7, 8];
const nums = [-2, -34];

var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let answer = Number.NEGATIVE_INFINITY; // 이게 포인트임
  let current = 0;

  for (let idx = 0; idx < nums.length; idx++) {
    const elem = nums[idx];

    if (current < 0) current = 0;
    current += elem; // 여기 순서도

    answer = Math.max(current, answer);
  }

  return answer;
};

console.log(maxSubArray(nums));
