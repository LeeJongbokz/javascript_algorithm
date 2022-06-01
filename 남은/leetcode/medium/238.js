// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 자신을 제외한 나머지 값들의 곱
// -> 다 곱한 다음에 자기만 빼기
// const nums = [1, 2, 3, 4];
const nums = [-1, 1, 0, -3, 3];

var productExceptSelf = function (nums) {
  //   const answer = [];

  const total = nums.reduce(
    (previousValue, currentValue) => previousValue * currentValue,
    1
  );

  console.log({ total });
  nums.forEach((elem, idx) => {
    // answer.push()
    console.log({ elem });
    const newVal = Math.abs(total / elem);
    nums.splice(idx, 1, elem === 0 ? total : newVal);
  });

  return nums;
};
console.log(productExceptSelf(nums));
