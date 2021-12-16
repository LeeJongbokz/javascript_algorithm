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
  let leng = a.length > b.length ? a.length : b.length;
  let answer = "";
  //   let sum = [...(Number(a) + Number(b)).toString()].map((item) => Number(item));
  //   console.log(sum);
  //   return;
  let add = 0;
  for (let idx = leng - 1; idx >= 0; idx--) {
    console.log(a[idx], b[idx]);
    const num = Number(a[idx] ? a[idx] : 0) + Number(b[idx] ? b[idx] : 0) + add;
    // const num = Number(a[idx] ? a[idx] : 0) + Number(b[idx] ? b[idx] : 0) + add;
    add = 0;

    console.log(idx, { num }, num % 2);
    if (num >= 2) {
      //   sum[idx] = sum[idx] % 2;
      //   if (sum[idx - 1] || sum[idx - 1] === 0) {
      //     // sum[idx - 1] = sum[idx - 1] + 1;
      add = 1;
      answer = answer + (num % 2);
      if (idx === 0) {
        console.log({ num });
        // idx = 1;
        // 한 번 더 돌려야 하는데
        answer = answer + "1";
      }
      continue;
      //   } else {
      //     add = 0;
      //     // sum.unshift(1);
      //   }
      //   continue;
    }
    answer = answer + (num % 2);
    // console.log(idx, sum);
  }
  return answer;
};
console.log(addBinary(a, b));
