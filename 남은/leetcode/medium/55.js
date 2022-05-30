// https://leetcode.com/problems/jump-game/
// 55. Jump Game
// DP, greedy

// 못 품
// https://leetcode.com/problems/jump-game/discuss/1895505/Greedy-Typescript
// https://leetcode.com/problems/jump-game/discuss/1909658/O(N)-time-O(1)-space

// 지우고 다시 풀기

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 맨 마지막에만 닿으면 되니까 제일 큰 수만 골라서..
// const nums = [2, 3, 1, 1, 4]; // true
const nums = [3, 2, 1, 0, 4]; // false
// 0, 1,
// const nums = [0];
// const nums = [2, 0];
// const nums = [2, 0, 0];
// const nums = [2, 5, 0, 0];
// const nums = [
//   8, 2, 4, 4, 4, 9, 5, 2, 5, 8, 8, 0, 8, 6, 9, 1, 1, 6, 3, 5, 1, 2, 6, 6, 0, 4,
//   8, 6, 0, 3, 2, 8, 7, 6, 5, 1, 7, 0, 3, 4, 8, 3, 5, 9, 0, 4, 0, 1, 0, 5, 9, 2,
//   0, 7, 0, 2, 1, 0, 8, 2, 5, 1, 2, 3, 9, 7, 4, 7, 0, 0, 1, 8, 5, 6, 7, 5, 1, 9,
//   9, 3, 5, 0, 7, 5,
// ]; //  무한 로딩 -> true

// 지나갈 수 있는 길이의 합이 넘스의 길이-1보다 같거나 크다면 트루 -=> ㄴㄴ
// 조건 추가

// 현재 인덱스를 활용해야 함
var canJump = function (nums) {
  if (nums.length <= 1) return true; // for edge-case
  let dp = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    dp = Math.max(dp, nums[i] + i);
    if (!nums[i] && dp <= i) return false; //  [3, 2, 1, 0, 4]; 이런 케이스 0인데 뒤에 더 가야할 스텝들이 있으니까
    if (dp >= nums.length - 1) return true;
  }
  return false;
};

console.log(canJump(nums));
