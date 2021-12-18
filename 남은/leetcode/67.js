// 67. Add Binary
// https://leetcode.com/problems/add-binary/

const a = "11",
  b = "1";
// const a = "1010",
//   b = "1011";
// const a = "0",
//   b = "0";
// const a =
//   "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
// const b =
//   "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";

//   ! 배열에 담으면 안 됨
var addBinary = function (a, b) {
  a = a.split("").reverse().join("");
  b = b.split("").reverse().join("");
  let leng = a.length > b.length ? a.length : b.length;
  const answer = [];
  for (let idx = 0; idx < leng; idx++) {
    // console.log(a[idx], b[idx]);
    let num =
      Number(a[idx] || 0) + Number(b[idx] || 0) + Number(answer[idx] || 0);

    if (num >= 2) {
      num = num % 2;
      answer[idx] = num;
      answer.push(1);
    } else {
      answer[idx] = num;
    }
  }
  return answer.reverse().join("");
};
console.log(addBinary(a, b));
