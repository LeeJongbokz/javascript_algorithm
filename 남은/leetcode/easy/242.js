// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// s, t랑 같은 문자 한 번씩 들어가있어야 함

const s = "anagram",
  t = "nagaram";

// const s = "cat",
//   t = "tar";

// 시간 초과 뜸
// 해쉬맵?
// 정렬!!

var isAnagram = function (s, t) {
  s = [...s].sort().join("");
  t = [...t].sort().join("");
  if (s !== t) return false;
  return true;
};
console.log(isAnagram(s, t));
