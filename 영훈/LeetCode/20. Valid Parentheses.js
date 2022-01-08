/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  for (let x of s) {
    if (x === '(' || x === '{' || x === '[') stack.push(x);
    else {
      if (stack.length === 0) return false;
      let p = stack.pop();
      if ((x === ')' && p !== '(') || (x === '}' && p !== '{') || (x === ']' && p !== '[')) return false;
    }
  }

  return stack.length === 0 ? true : false;
};