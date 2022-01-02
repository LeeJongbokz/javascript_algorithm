// 611. Valid Triangle Number
// https://leetcode.com/problems/valid-triangle-number/

const nums = [2, 2, 3, 4];
// const nums = [4, 2, 3, 4];

/**
 * @param {number[]} nums
 * @return {number}
 */

// 중복허용
// 3개 골라야 함
// 3개 중에 가장 큰 애 따로 빼서 비교
var triangleNumber = function (nums) {
  let answer = 0,
    start = 0,
    end = nums.length - 1,
    middle = 1;

  //   let startNum = 0,
  //     middleNum = 0,
  //     endNum = 0;

  //   // 첫 번째
  //   for (let idx = start; idx < nums.length; idx++) {
  //     const elem = nums[idx];

  while (middle < end) {
    middle = start + 1;
    //
    // startNum = nums[start];
    // middleNum = nums[middle];
    // endNum = nums[end];
    const threeNums = [nums[start], nums[middle], nums[end]];
    // console.log(nums[start]);
    // console.log(nums[middle]);
    // console.log(nums[end]);
    const maxNum = Math.max(...threeNums);
    const maxNumIdx = threeNums.indexOf(maxNum);
    // let maxNum = Math.max(startNum, middleNum, endNum);
    console.log({ threeNums });
    console.log({ maxNumIdx });

    // if(Math.pow(nums[start]))
    start++;
    end--;
  }
  //   }
  return answer;
};
console.log(triangleNumber(nums));
