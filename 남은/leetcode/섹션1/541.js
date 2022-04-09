// https://leetcode.com/problems/reverse-string-ii/
// 541. Reverse String II

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

const s = "abcdefg",
  k = 2;

// gfedcba
// g abcdefg
// gf abcde
// gfe abcd
// gfed abc
// gfedc ab
// gfedcb a
// gfedcba

// const s = "abcd",
//   k = 2;

var reverseStr = function (s, k) {
  s = [...s];
  for (let idx = 0; idx < s.length; idx++) {
    // const idx=
    const elem = s.pop();
    s.splice(idx, 0, elem);
    console.log({ s });
  }

  return s.join("");
};

console.log(reverseStr(s, k));
