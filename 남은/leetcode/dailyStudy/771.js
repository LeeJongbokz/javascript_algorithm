// 771. Jewels and Stones
// https://leetcode.com/problems/jewels-and-stones/
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

// const jewels = "aA",
//   stones = "aAAbbbb";

const jewels = "z",
  stones = "ZZ";

var numJewelsInStones = function (jewels, stones) {
  let answer = 0;
  jewels = [...jewels];

  [...stones].forEach((elem) => {
    if (jewels.includes(elem)) answer++;
  });
  return answer;
};
console.log(numJewelsInStones(jewels, stones));
