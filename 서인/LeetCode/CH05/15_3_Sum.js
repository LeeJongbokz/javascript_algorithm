var threeSum = function (nums) {
    let answer = [];
      
      nums.sort((a, b) => a-b);
  
      
      for (let i = 0; i < nums.length - 2; i++ ){
          if (nums[i] != nums[i-1]){
              let left = i + 1;
              let right = nums.length -1;
              
              while (left < right) {
                  let sum = nums[i] + nums[left] + nums[right];
                  
                  if (sum === 0){
                      answer.push([nums[i], nums[left] , nums[right]])
                      while (nums[left] === nums[left+1]) left++;
                      while (nums[right] === nums[right -1]) right--;
                      left++;
                      right--;
                      
                  } else if (sum < 0){
                      left++
                  } else {
                      right--
                  }
              }
          }
      }
      
    return answer;
  };
  
  