// 2200. Find All K-Distant Indices in an Array
// https://leetcode.com/contest/weekly-contest-284/problems/find-all-k-distant-indices-in-an-array/

// |i - j| <= k
// 이거나
// nums[j] == key
// 인  k-distant indices를 increasing order로 리턴해라

/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */

const nums = [3, 4, 9, 1, 3, 9, 5];
const key = 9;
const k = 1;
// const nums = [1, 1000, 1, 1000];
// const key = 1000;
// const k = 4;
// const nums = [1];
// const key = 1;
// const k = 1;
// const nums = [2, 2, 2, 2, 2];
// const key = 2;
// const k = 2;
// const nums = [3, 4, 9, 1, 3, 9, 5];
// const key = 9;
// const k = 1;

var findKDistantIndices = function (nums, key, k) {
  //  일단 key랑 똑같은 친구들을 구해야 함
  const found = [];
  nums.forEach((element, idx) => {
    if (element === key) found.push(idx);
  });

  console.log({ found });
  // 다 포함되는 경우
  if (found[found.length - 1] < k) {
  }
  //
  //
  const answer = [];
  nums.forEach((elem, idx) => {
    // console.log({ idx });
    for (let index = 0; index < found.length; index++) {
      const element = found[index];
      if (Math.abs(idx - element) <= k) {
        answer.push(idx);
        return;
      }
    }
    console.log({ answer });
  });
  return answer;
};
console.log(findKDistantIndices(nums, key, k));

//  // 1. idx가 k보다 작을경우
//  if (idx >= k) answer.push(idx);
//  // 2. nums[idx-k]인 값이 있을 경우
//  else if (nums[k - idx] || nums[idx + k]) answer.push(idx);
//  // 3. elem 이 key일 경우
//  else if (elem === key) answer.push(idx);
