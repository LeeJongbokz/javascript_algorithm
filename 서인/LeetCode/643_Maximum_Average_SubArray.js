
// 643. Maximum Average Subarray I

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findMaxAverage = function(nums, k) {
    if (nums.length === 1 && k === 1) {
        return nums[0]
    }
    
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    let windowSize = 0;
    
    for ( let i = 0; i < nums.length + 1; i++){
        if (windowSize === k){
            let avg = sum / k;
            max = Math.max(max, avg);    
            sum -= nums[i - k];
            windowSize--;
        }    
        sum += nums[i];
        windowSize++;    
    }
    return max;
   
};