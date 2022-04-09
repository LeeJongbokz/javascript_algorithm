// 2226. Maximum Candies Allocated to K Children
// https://leetcode.com/contest/weekly-contest-287/problems/maximum-candies-allocated-to-k-children/
/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */

// const candies = [5, 8, 6],
//   k = 3;

// const candies = [2, 5],
//   k = 11;
// const candies = [2, 5],
//   k = 3;
const candies = [1, 2, 3, 4, 10],
  k = 5;
// k개 만큼 배열의 길이를 늘려야 함
// 이미 k개 만큼 배열이 나눠져있다면 이미 있는 요소 중 가장 작은 단위로 주면 됨
// 작은 애는 버려질 수 있다! -> 그래서 작은 애가 기준이 되면 안 됨
// 바ㅣ이너리 서치로 푸는거라고 함

//
var maximumCandies = function (candies, k) {
  //   let answer = 0;

  const totalCandies = candies.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  const originalLength = candies.length;
  let neededDevideCount = k - originalLength;

  console.log({ neededDevideCount });

  if (totalCandies < k) return 0;
  if (originalLength === k) return Math.min(...candies); // 여기 조건 추가해야 함

  while (neededDevideCount) {
    const small = Math.min(...candies);
    const big = Math.max(...candies);
    if (big > small) {
      const idx = candies.indexOf(big);
      candies[idx] = big - small;
      candies.push(small);
    }
    neededDevideCount--;
  }

  //   return answer;
  return Math.min(...candies);
};

console.log(maximumCandies(candies, k));
