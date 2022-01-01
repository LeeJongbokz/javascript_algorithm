var smallerNumbersThanCurrent = function(nums) {
    
     let answer = [];
    
     for(let i=0; i<nums.length; i++){
         
         let cnt = 0; 
         
         for(let j=0; j<nums.length; j++){
             if(i !== j && nums[j] < nums[i]){
                 cnt += 1;
             }
         }
         
         answer.push(cnt);
     }
    
    return answer; 
};
