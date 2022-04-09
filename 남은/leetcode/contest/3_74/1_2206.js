// 2206. Divide Array Into Equal Pairs
// https://leetcode.com/contest/biweekly-contest-74/problems/divide-array-into-equal-pairs/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// const nums = [3, 2, 3, 2, 2, 2];
const nums = [1, 2, 3, 4];

var divideArray = function (nums) {
  // pairs 수 만큼 동일한 짝의 페어를 맞춰야함
  //   const pairs = nums.length / 2;
  //   let count = 0;

  nums.sort(function (a, b) {
    return a - b;
  });

  // 둘씩 비교하면서, 둘이 같아야 함
  while (nums.length) {
    const firstNum = nums.shift();
    const secondNum = nums.shift();
    if (firstNum !== secondNum) return false;
  }

  return true;
};

console.log(divideArray(nums));
