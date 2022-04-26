// 977. Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/

// const nums = [-4, -1, 0, 3];
const nums = [-4, -1, 0, 3, 10];
// const nums = [-7, -3, 2, 3, 11]; // 2,3,3,7,11

// negative 밸류만 신경쓰면 될듯
// const negatives=[]
// - 벨류면 제곱한 다음 빼놓고 negatives에 넣어놓기
// 어쩌피 정렬되어있으니까 반대로 차곡차곡 넣으면 될듯
//1, 16
//0,9,100
//4,9,100 -> test case
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// TODO: O(n) 으로 풀기
// -> 이렇게는 못 품
// https://leetcode.com/problems/squares-of-a-sorted-array/discuss/1687726/JS-solution-without-map-and-sort
// 참고함
// const nums = [-4, -1, 0, 3, 10];

var sortedSquares = function (nums) {
  const answer = [];
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    console.log({ answer });
    const startNum = nums[start] ** 2; // 16 [16, 100] 1 [1,9,16,100] 0
    const endNum = nums[end] ** 2; // 100 [100] 9 [9, 16, 100] 0
    if (startNum >= endNum) {
      answer.unshift(startNum);
      start++;
    } else {
      answer.unshift(endNum);
      end--;
    }
  }

  return answer;
};
console.log(sortedSquares(nums));
