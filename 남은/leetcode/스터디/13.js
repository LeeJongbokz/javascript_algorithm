//leetcode.com/problems/roman-to-integer/
// 로만을 숫자로 리턴하는 문제

// 전에 오는 값을 체크해서 빼기인지 구해야함
// 다음 값을 봐야함

/**
 * @param {string} s
 * @return {number}
 */

//
// const s = "III";
const s = "LVIII";
// const s = "MCMXCIV";
// const s = "CM";
// const s = "IV";

var romanToInt = function (s) {
  let answer = 0;

  const returnNum = (param, afterNum) => {
    switch (param) {
      case "V":
        return 5;
      case "X":
        return afterNum === "L" || afterNum === "C" ? -10 : 10;
      case "L":
        return 50;
      case "C":
        return afterNum === "D" || afterNum === "M" ? -100 : 100;
      case "D":
        return 500;
      case "M":
        return 1000;

      default:
        return afterNum === "V" || afterNum === "X" ? -1 : 1;
    }
  };

  [...s].forEach((elem, idx) => {
    answer += returnNum(elem, s[idx + 1]);
  });

  return answer;
};

console.log(romanToInt(s));
