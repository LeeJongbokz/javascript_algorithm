// 75. Sort Colors
// https://leetcode.com/problems/sort-colors/

const nums = [2, 0, 2, 1, 1, 0];
// const nums = [2, 0, 1];

// 뒤에보다 크면 뒤랑 자리 바꿈
// 앞으로 오게된 애가 자기 앞에 애랑 체크
// 앞에 애랑 체크하는 변수는 start 사용
// 체크해서 더 작으면 자리 바꿈 -> 반복
// 똑같으면 바꾸지 말고 end ++만

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let start = 0,
    end = nums.length - 1,
    count = 0;

  while (count < end + 1) {
    const num = nums[count];

    if (num === 0) {
      [nums[count], nums[start]] = [nums[start], nums[count]];
      start++;
      count++;
    } else if (num === 2) {
      [nums[count], nums[end]] = [nums[end], nums[count]];
      end--;
    } else {
      count++;
    }

    console.log({ nums });
  }
};

sortColors(nums);
