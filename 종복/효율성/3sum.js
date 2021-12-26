/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
 
    let set = new Set();
    
    
    for(let i=0; i<nums.length; i++){
        
        
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                
                let temp = [];
                
                if(nums[i]+nums[j]+nums[k] === 0){
                    temp.push(nums[i]);
                    temp.push(nums[j]);
                    temp.push(nums[k]);
                    set.add(temp);
                }
            }
        }
    }
    
    
    let answer = [];
    answer = [...set];
    
    return answer;
    
};
