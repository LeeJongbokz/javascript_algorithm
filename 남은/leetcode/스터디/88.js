// 88. Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 내림차순 정렬

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
var merge = function (nums1, m, nums2, n) {
  //   nums2.forEach((elem, idx) => {});
  //   console.log({ nums1 });
  while (nums2.length) {
    const elem = nums2.shift();
    console.log({ elem });

    for (let idx = 0; idx < nums1.length; idx++) {
      const elem2 = nums1[idx];
      console.log({ elem2 });

      if (
        (elem >= elem2 && elem < nums1[idx + 1]) ||
        (elem >= elem2 && !nums1[idx + 1])
      ) {
        console.log("here");
        nums1.splice(idx + 1, 0, elem);
        // nums1.pop();
      }
    }
  }
  console.log({ nums1 });
};
console.log(merge(nums1, m, nums2, n));
