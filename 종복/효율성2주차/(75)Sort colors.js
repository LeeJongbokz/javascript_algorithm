
var sortColors = function(nums) {
    
    let answer = [];
    
    let red = 0;
    let white = 0;
    let blue = 0;
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 0){
            red += 1;
        }else if(nums[i] === 1){
            white += 1;
        }else{
            blue += 1;
        }
    }
    
    while(1){
        
        if(red !== 0){
            answer.push(0);
            red -= 1;
            continue;
        }else{
            
            if(white !== 0){
                answer.push(1);
                white -= 1;
                continue;
            }else{
                if(blue !== 0){
                    answer.push(2);
                    blue -= 1;
                    continue;
                }else{
                    break;
                }
            }
        }
    }
    
    return answer;    
    
};
