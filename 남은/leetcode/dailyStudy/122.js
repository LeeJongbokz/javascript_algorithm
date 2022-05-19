// 122. Best Time to Buy and Sell Stock II
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
/**
 * @param {number[]} prices
 * @return {number}
 */

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/discuss/2049665/JavaScript-Simple-Optimal-Solution
// 위에 답 봄

const prices = [1, 2, 3, 4, 5]; //4
// const prices = [7, 1, 5, 3, 6, 4]; //7
// const prices = [7, 6, 4, 3, 1]; //0

/////// 가장 큰 - 가장 작은 수가 최대 프로핏을 내는 거면..
// 1,2,3,4
// 1,2,3
// 1,2
// 1
////////
// 들고 잇는 건 팔지 않으면 안 됨

var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
};
console.log(maxProfit(prices));
