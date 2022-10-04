// https://leetcode.com/problems/maximum-product-subarray/
// 아래 링크 보고 이해해기
// https://leetcode.com/problems/maximum-product-subarray/discuss/416395/JavaScript-Solution-w-Explanation

/**
 * @param {number[]} nums
 * @return {number}
 */

// const nums = [2, 3, -2, 4];
// const nums = [-2, 0, -1];
const nums = [-2, 3, -4];

var maxProduct = function (nums) {
  let max = null;
  // 가장 작은 -가 같은 -를 만나야 시너지를 내므로
  let min = 0;

  for (let i = 0; i < nums.length; i++) {
    const firstElem = nums[i];
    // 마지막 엘레멘트일 경우를 위해 값 하나 자체만으로도 크기 비교해야함
    if (!max || firstElem > max) max = firstElem;

    let currMax = firstElem;
    let currMin = firstElem;
    // // TODO: 0은 무조건 스킵
    // if (firstElem === 0) continue;
    for (let j = i + 1; j < nums.length; j++) {
      const secondElem = nums[j];
      console.log({ firstElem, secondElem });

      let calcValue = currMax * secondElem;
      const calcValueMin = currMin * secondElem;
      console.log({ currMax, max, calcValue, calcValueMin });
      if (calcValueMin < 0 && calcValueMin < min) min = calcValue;
      if (calcValueMin > calcValue) calcValue = calcValueMin;
      //   if (calcValue < currMax) break;
      if (calcValue >= currMax) currMax = calcValue;
      if (currMax >= max) max = currMax;
    }
  }
  if (max === -0) max = 0;
  return max;
};

console.log(maxProduct(nums));
