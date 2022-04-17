// 2231. Largest Number After Digit Swaps by Parity
// https://leetcode.com/contest/weekly-contest-288/problems/largest-number-after-digit-swaps-by-parity/

// const num = 1234;
// 1 2 3 4
// 4 2 홀수 배열 정렬
// 3 1 정렬
// [1 2 3 4] 돌면서 홀수면 홀수 배열에서 꺼냄3 4 1 2

const num = 65875;

/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
  num = (num + "").split("");
  const answer = [];
  const sorted = [...num].sort(function (a, b) {
    return b - a;
  });
  const odds = sorted.filter((elem) => elem % 2 === 1);
  const evens = sorted.filter((elem) => elem % 2 === 0);

  num.forEach((elem, idx) => {
    // 짝수면
    let num;
    if (elem % 2 === 0) {
      num = evens.shift();
      // 홀수면
    } else {
      num = odds.shift();
    }
    answer.push(num);
  });

  return answer.join("") * 1;
};
console.log(largestInteger(num));
