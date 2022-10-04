// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/
// TODO: 다른 사람들은 어떻게 풀었는지 보기
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 자신을 제외한 나머지 값들의 곱
// -> 다 곱한 다음에 자기만 빼기
// const nums = [1, 2, 3, 4];
const nums = [-1, 1, 0, -3, 3];
// const nums = [0, 0];
// const nums = [1, -1];

var productExceptSelf = function (nums) {
  const isIncludeZero = nums.includes(0);
  let zeroCount = 0;
  // console.log({ isIncludeZero });
  //   const answer = [];

  const total = nums.reduce((previousValue, currentValue) => {
    if (currentValue === 0) {
      zeroCount++;
      return previousValue;
    } else {
      return previousValue * currentValue;
    }
  }, 1);

  // console.log({ total });
  nums.forEach((elem, idx) => {
    // answer.push()
    // console.log({ elem });
    const newVal = total / elem;
    // console.log(newVal === Infinity);
    if (isIncludeZero && elem !== 0) {
      nums.splice(idx, 1, 0);
    } else if (elem == 0 && zeroCount === 1) {
      nums.splice(idx, 1, total);
    } else if (newVal === Infinity) {
      nums.splice(idx, 1, 0);
    } else nums.splice(idx, 1, newVal);
    // nums.splice(idx, 1, elem === 0 ? total : newVal);
  });

  return nums;
};
console.log(productExceptSelf(nums));
