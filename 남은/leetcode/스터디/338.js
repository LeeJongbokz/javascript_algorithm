// https://leetcode.com/problems/counting-bits/
// 338. Counting Bits

const n = 0;
// const n = 2;
// const n = 5;

// DP 문제
/**
 * @param {number} n
 * @return {number[]}
 */

var countBits = function (n) {
  //   const ans = [0, 1, 1, 2, 1];
  const ans = [0, 1, 1, 2, 1, 2];
  //   console.log(ans[0]);
  if (n === 0) return [0];
  if (ans[n]) {
    ans.splice(n + 1);
    return ans;
  }

  const getBinary = (num) => {
    const binary = [];
    const count = 0;
    while (num > 1) {
      //   const val = Math.trunc(num / 2);
      const rest = num % 2;
      //   console.log({ rest });
      //   console.log({ num });
      num = Math.trunc(num / 2);

      binary.unshift(rest);
    }
    binary.unshift(num);
    // console.log({ binary });

    // return count;
    return binary.filter((i) => i === 1).length;
  };

  // 6부터 시작
  //   while (!ans[n]) {}
  //   for (let num = 5; num < n + 1; num++) {
  for (let num = 6; num < n + 1; num++) {
    const binary = getBinary(num);
    ans.push(binary);
  }

  return ans;
};
console.log(countBits(n));
