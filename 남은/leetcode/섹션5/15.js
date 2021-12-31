// https://leetcode.com/problems/3sum/
// 15. 3Sum
// 못 품!

// 각자 다른 3개 수가 0이 되는 조합을 찾는 문제
// 근데 중복은 안 됨
// -> 예를 들어서
// -1 0 1 -1 0 1 이면 [-1 0 1]은 하나만

// 안 풀었음!
// https://leetcode.com/problems/3sum/discuss/281302/JavaScript-with-lots-of-explanatory-comments!
// 답안 보고 있는 중
// 첫수, 중간수, 마지막수를 두고 풀어야 함

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const nums = [-1, 0, 1, 2, -1, -4];
// const nums  = []
// const nums  = [0]
var threeSum = function (nums) {
  nums = nums.sort();

  const answer = [];
  if (nums.length < 3) return answer;

  // 답안 보고 이해한 다음, 답안 안 보고 다시 풀어보기
  for (let start = 0; start < nums.length - 2; start++) {
    let middle = start + 1,
      end = nums.length - 1;

    // 배열을 소트했으므로
    if (nums[start] > 0) break;

    // we don't want repeats, so skip numbers we've already seen
    // -4 -1 -1 0 1 2의 경우
    // 첫 번째 -1이나 두 번째 -1이나 결과는 -1 0 1이므로 중복된다. 따라서 스킵
    if (start > 0 && nums[start] === nums[start - 1]) continue;

    while (middle < end) {
      if (nums[start] + nums[middle] + nums[end] === 0) {
        answer.push([nums[start], nums[middle], nums[end]]);
        // 예) -2 0 0 2 2 일 때 중복되는 숫자들 제거
        while (nums[middle] === nums[middle + 1]) middle++;
        while (nums[end] === nums[end - 1]) end--;
        middle++;
        end--;
        // 합이 0이 아닐 때
      } else if (nums[start] + nums[middle] + nums[end] < 0) {
        middle++;
      } else if (nums[start] + nums[middle] + nums[end] > 0) {
        end--;
      }
    }
  }

  return answer;
};

console.log(threeSum(nums));
