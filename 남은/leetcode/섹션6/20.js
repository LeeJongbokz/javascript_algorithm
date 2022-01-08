// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

// const s = "()";
const s = "()[]{}";
// const s = "(]";
// const s = "{[]}";
// const s = "(){}}{";
// const s = "({{{{}}}))"; // false
// const s = "(([]){})"; // true
// const s = "[({(())}[()])]"; // true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  s = [...s];

  if (s.length % 2 !== 0) return false;
  //   [...s].forEach((item) => {
  for (const item of s) {
    if (item === "(") {
      stack.push(")");
    } else if (item === "{") {
      stack.push("}");
    } else if (item === "[") {
      stack.push("]");
    } else {
      if (stack.pop() !== item) return false;
    }
  }

  if (stack.length === 0) return true;
  return false;
};
console.log(isValid(s));
