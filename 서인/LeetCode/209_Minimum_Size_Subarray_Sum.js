// 209. Minimum Size Subarray Sum

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    
    let a = 0;
    let b = 0;
    let len = nums.length;
    let answer = Number.MAX_VALUE
    let sum = 0;
    
    while (b < len){
        sum += nums[b]
        if (sum < target){
            b++
        } else {
            while (sum >= target){
                let window = b - a + 1;
                answer = Math.min(answer, window)
                sum -= nums[a];
                a++
            }
            b++
        }   
    }
    if (answer == Number.MAX_VALUE) return 0;
    else return answer;
    
        
};