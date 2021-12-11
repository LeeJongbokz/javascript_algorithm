// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// # 121
// Best time to buy and sell stock


var maxProfit = function(prices) {
        
    let max = 0;
    let min = prices[0];
    
    for (let i = 1; i < prices.length; i++){
        
        if (prices[i] - min > max){
            max = prices[i] - min
        }      
        
        if (prices[i] < min) { 
            min = prices[i];
        }
    }
    
    return max;
};
