// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
// 309. Best Time to Buy and Sell Stock with Cooldown
/**
 * @param {number[]} prices
 * @return {number}
 */

// After you sell your stock, you cannot buy stock on the next day

// const prices = [1, 2, 3, 0, 2]; //3
// const prices = [1];
const prices = [1, 2, 4];

var maxProfit = function (prices) {
  let profit = 0;
  let cool = false;
  for (let i = 1; i < prices.length; i++) {}

  return profit;
};
console.log(maxProfit(prices));
