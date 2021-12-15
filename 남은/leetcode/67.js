// 67. Add Binary
// https://leetcode.com/problems/add-binary/

const a = "11",
  b = "1";
// const a = "1010",
//   b = "1011";
// const a = "0",
//   b = "0";

var addBinary = function (a, b) {
  let answer = "",
    convertedSum = 0;
  // loop = true;
  const sum = (Number(a) + Number(b)).toString();
  //   console.log({ sum });
  // 10진수로 변환
  //   [...sum].forEach((num, idx) => {
  //     convertedSum += num * Math.pow(2, [...sum].length - idx - 1);
  //   });
  [...sum].forEach((num, idx) => {
    convertedSum += num * Math.pow(2, sum.length - idx - 1);
  });
  //   for (let idx = 0; idx < sum.length; idx++) {
  //     const num = sum[idx];
  //     convertedSum += num * Math.pow(2, sum.length.length - idx - 1);
  //   }

  while (true) {
    // const leftOver = convertedSum % 2;
    // answer = leftOver + answer;
    answer = (convertedSum % 2) + answer;
    convertedSum = Math.floor(convertedSum / 2);
    // console.log({ convertedSum });
    // console.log({ leftOver });
    // console.log({ answer });
    if (convertedSum < 2) {
      if (convertedSum > 0) answer = convertedSum + answer;
      //   loop = false;
      return answer;
    }
  }

  // 변환환 10진수를 2진수로 변환
  //   return answer;
};
console.log(addBinary(a, b));
