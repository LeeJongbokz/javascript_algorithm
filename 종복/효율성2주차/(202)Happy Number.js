
var isHappy = function(n) {
    
    
    let answer = false;
    let set = new Set();
    set.add(n);
    
    while(1){
    
        let str = String(n);
        let sum = 0; 
        
        
        for(let i=0; i<str.length; i++){
            let num = Number(str[i]);
            sum += Math.pow(num, 2);
        }
        
        if(sum === 1){
            answer = true;
            break; 
        }else{
            if(set.has(sum)){
                break;
            }else{
                set.add(sum);
                n = sum;
            }
        }
        
    }
    
    return answer; 
    
};
