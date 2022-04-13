// https://leetcode.com/problems/sqrtx/
// 69. Sqrt(x)
// 내장 메서드 사용하지 않고 Sqrt구하기

// const x = 4;
// const x = 8;
const x = 0;

/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function (x) {
  // x의 반의 반에서 시작해도 되겠음
  // 64 -> 32->16이니까 아니네..
  // x의 반의 반의 반에서 시작해도 되겠음
  // 64 -> 32->16->8
  // 81 -> 40 ->20->10
  let answer = 0;
  while (answer * answer < x) answer++;

  if (answer * answer > x) answer--;

  return answer;
};

console.log(mySqrt(x));
