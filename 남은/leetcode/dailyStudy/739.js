// 739. Daily Temperatures
// https://leetcode.com/problems/daily-temperatures/
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// 스택으로 풀어야 한다고 함

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
// const temperatures = [30, 60, 90];
// const temperatures = [30, 40, 50, 60];
// const temperatures = [34, 80, 80, 80, 34, 80, 80, 80, 34, 34];

var dailyTemperatures = function (temperatures) {
  const answer = [];

  // 자기 인덱스 보다 뒤에 있는 것 중에 자기보다 큰 친구 중에 가장 가까운놈으로
  // findIndex 를 쓰면 되겠다
  temperatures.forEach((elem, idx) => {
    const isLargeNumber = (element) => element > elem;
    let higherIdx = temperatures.findIndex(isLargeNumber);

    if (higherIdx === -1) answer.push(0);
    else {
      for (let idx2 = idx + 1; idx2 < temperatures.length; idx2++) {
        const element = temperatures[idx2];

        if (element > elem) {
          higherIdx = idx2;
          answer.push(idx2 - idx);
          break;
        }
        // 자기 인덱스 뒤에 자기보다 큰게 없다면
        if (idx2 === temperatures.length - 1 && higherIdx < idx) answer.push(0);
      }
    }
  });
  if (answer.length === temperatures.length - 1) answer.push(0);
  return answer;
};

console.log(dailyTemperatures(temperatures));
