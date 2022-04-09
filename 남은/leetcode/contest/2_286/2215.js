// 2215. Find the Difference of Two Arrays
// https://leetcode.com/contest/weekly-contest-286/problems/find-the-difference-of-two-arrays/

// 정답 배열에 2 배열을 넣어서 리턴하는데,
// 첫 배열에는 nums1에는 있는데 nums2에는 없는 애들,
// 두 번째 배열에는 nums2에는 있는데 nums1에는 없는 애들, 넣어서 리턴하면 됨

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 *
 */

// const nums1 = [1, 2, 3],
//   nums2 = [2, 4, 6];

const nums1 = [1, 2, 3, 3],
  nums2 = [1, 1, 2, 2];

var findDifference = function (nums1, nums2) {
  const answer = [[], []];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  nums1 = [...set1];
  nums2 = [...set2];

  console.log({ nums1 });
  //   겹치면 배열에서 없애버리기
  //   겹치는건 한 번만 하면 되니까 셋을 쓰거나, 이미 정답 배열에 있으면 건너뛰기?
  nums1.forEach((elem, idx) => {
    // indexOf가 빠를까 find가 빠를까?
    // if (nums2.includes(elem)) nums1.splice(idx, 1);
    if (!nums2.includes(elem)) answer[0].push(elem);
  });

  nums2.forEach((elem, idx) => {
    if (!nums1.includes(elem)) answer[1].push(elem);
  });

  return answer;
};

console.log(findDifference(nums1, nums2));
