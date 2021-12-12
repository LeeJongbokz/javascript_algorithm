var maxProfit = function(prices) {
  let answer = 0;
  let min = 10001;
  
  for (let i = 0; i < prices.length; i++) {
      if (prices[i] < min) {
          min = prices[i];
      } else if (prices[i] - min > answer) {
          answer = prices[i] - min;
      }
  }
  
  return answer;
};