
var sortArrayByParity = function(nums) {
    
    let answer = [];
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] % 2 === 0){
            answer.push(nums[i]);
        }
    }
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] % 2 === 1){
            answer.push(nums[i]);
        }
    }
    
    return answer;
};
