// https://leetcode.com/contest/weekly-contest-284/problems/maximize-the-topmost-element-after-k-moves/
// 2202. Maximize the Topmost Element After K Moves

// const nums = [
//   68, 76, 53, 73, 85, 87, 58, 24, 48, 59, 38, 80, 38, 65, 90, 38, 45, 22, 3, 28,
//   11,
// ];
// const k = 1;
// const nums = [5, 2, 2, 4, 0, 6],
//   k = 4;
// const nums = [2],
//   k = 1;
const nums = [18],
  k = 3;
// const nums = [4, 6, 1, 0, 6, 2, 4];
// k = 0;
// const nums = [0];
// k = 1000000000;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumTop = function (nums, k) {
  const removedNums = [];

  if (k === nums.length) {
    // 무조건 하나 남겨둔 상태에서 하나를 돌려놔야 하므로
    // 마지막 인자까지 다 뺄 수 없음
    nums.pop();
    return nums.length ? Math.max(...nums) : -1;
  } else if (k > nums.length) {
    if (nums.length === 1) {
      // 이때는 k가 홀수인지 짝수인지 알아야 함
      return k % 2 === 0 ? nums[0] : -1;
    } else {
      return Math.max(...nums);
    }
  } else if (k === 1 && nums.length > 1) {
    nums.shift();
    return nums[0];
  } else if (k < nums.length) {
    if (k === 0) return nums[0];

    let big = 0;
    for (let idx = 0; idx < k; idx++) {
      const elem = nums.shift();
      removedNums.push(elem);
      if (big < elem) big = elem;

      if (idx === k - 2) {
        //  그전에 뽑아놨떤 수 중에 가장 큰거랑(big) 그 다다음 수랑 비교
        // 그 다다음 수 없으면 무조건 다시 돌려놓기
        if (!nums[1]) return big;
        // big이 그 다다음 수보다 크면 다시 돌려놓기
        if (big > nums[1]) return big;
        // 그 다다음 수가 더 크면 그대로 빼기
        if (big < nums[1]) {
          big = nums[1];
          return big;
        }
      }
    }

    return big;
  }
};

console.log(maximumTop(nums, k));
