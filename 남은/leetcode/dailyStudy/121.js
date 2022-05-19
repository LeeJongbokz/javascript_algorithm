// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */

// Return the maximum profit
// 시간초과...
// max

// const prices = [7, 1, 5, 3, 6, 4];
// const prices = [7, 6, 4, 3, 1];
// const prices = [2, 8, 1, 5, 3, 6, 4]; //6
// const prices = [2, 4, 1];
const prices = [4, 11, 1, 2, 7]; //7

// !
// max 체크, max 인덱스보다 작은 min 찾기
// 없으면 그다음 max 체크

// buy를 매번 움직이는 로직을 써서 망?했던 거임
// buy말고 sell을 계속 움직움직여야 함
var maxProfit = function (prices) {
  let profit = 0,
    buy = prices[0];

  prices.forEach((elem) => {
    const tempProfit = elem - buy;
    profit = Math.max(profit, tempProfit);
    // 어쩌피 이 다음 숫자들이랑 비교하니까 여기서 buy를 새롭게 업데이트 해주면 됨
    buy = Math.min(buy, elem);
  });

  return profit;
};

console.log(maxProfit(prices));
