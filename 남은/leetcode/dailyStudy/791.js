// 791. Custom Sort String
// https://leetcode.com/problems/custom-sort-string/

// const order = "cba",
//   s = "abcd";

const order = "cbafg",
  s = "abcd";

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  let answer = [];
  order = [...order];
  s = [...s];

  order.forEach((elem) => {
    while (s.includes(elem)) {
      const index = s.indexOf(elem);
      s.splice(index, 1);
      answer.push(elem);
    }
  });

  if (s) answer = [...answer, ...s];

  return answer.join("");
};
console.log(customSortString(order, s));
