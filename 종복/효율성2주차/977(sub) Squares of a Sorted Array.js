var sortedSquares = function(nums) {
    
    
    for(let i=0; i<nums.length ;i++){
        nums[i] = Math.pow(nums[i], 2);
    }
    
    nums.sort(function(a,b){
        return a-b;
    });

    return nums;
    
};
