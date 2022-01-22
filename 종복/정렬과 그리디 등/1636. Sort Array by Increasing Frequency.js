
var frequencySort = function(nums) {
    
    let answer = [];
    
    let map = new Map();
    
    for(let i=0; i<nums.length; i++){
        
        if(map.has(nums[i])){
           map.set(nums[i], map.get(nums[i])+1); 
        }else{
           map.set(nums[i], 1); 
        }
    }
    
    let mapToArray = [...map];
    
    mapToArray.sort((a,b) => {
        if(a[1] === b[1]){
            return b[0] - a[0];
        }else{
            return a[1] - b[1];
        }
    });
             
    for(let [key, val] of mapToArray){
        while(val--){
            answer.push(key);
        }
    }         
    
    return answer; 
    
};
