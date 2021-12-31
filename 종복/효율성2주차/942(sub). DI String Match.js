
var diStringMatch = function(s) {
    
    let answer = [];
    
    let total = s.length + 1;
    let left = 0; 
    let right = total-1;
    
    let arr = [];
    let pos = 0; 
    
    for(let i=0; i<total; i++){
        arr.push(i);
    }
    
    let i = 0; 
    
    while(left<=right){
        
        if(left === right){
            answer.push(arr[left]);
            break;
        }
        
        if(s[i] === 'I'){
            
            answer.push(arr[left]);
            left += 1;
            i += 1;
            
        }else{
            
            answer.push(arr[right]);
            right -= 1;
            i += 1; 
        }
        
    }
    
    return answer; 
    
    
    
};
