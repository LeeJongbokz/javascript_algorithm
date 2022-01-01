/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    let arr = [0, 1, 2]
    let cnt0 = 0;
    let cnt1 = 0;
    let cnt2 = 0;
    
    for (let x of nums){
        if (arr[0] === x) cnt0++;
        if (arr[1] === x) cnt1++;
        if (arr[2] === x) cnt2++;
    }
    
    let sum = cnt0 + cnt1 + cnt2;
    let index = 0;
    
    while (cnt0 > 0){
        nums[index++] = 0
        cnt0--
    }

    while(cnt1 > 0){
        nums[index++] = 1
        cnt1--
    }
    while(cnt2 > 0) {
        nums[index++] = 2
        cnt2--
    }
    
};