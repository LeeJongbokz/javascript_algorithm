// 2208. Minimum Operations to Halve Array Sum
// https://leetcode.com/contest/biweekly-contest-74/problems/minimum-operations-to-halve-array-sum/

/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [5, 19, 8, 1];
// const nums = [3, 8, 20];

var halveArray = function (nums) {
  let halfTotalSum = 0;
  let answer = 0;

  let sorted = nums.reduce((sorted, el) => {
    let index = 0;
    while (index < sorted.length && el < sorted[index]) index++;

    sorted.splice(index, 0, el);
    halfTotalSum += el;
    return sorted;
  }, []);

  // get the half value
  halfTotalSum = halfTotalSum / 2;
  // store original value to compare
  const originalHalfValue = halfTotalSum;

  // find minimun number
  sorted.forEach((elem, idx) => {
    // 한 숫자를 여러 번 나눌 수 있음
    // 여러 번 나누는 기준은 다음 수보다 나눈수가 클 때만
    while (elem / 2 > sorted[idx + 1]) {
      answer++;
      elem = elem / 2;
      console.log({ elem });
      if (originalHalfValue - elem < originalHalfValue) {
        return;
      }
    }
  });

  return answer;
};

console.log(halveArray(nums));
