
var isValid = function(s) {
    
    let stack = [];
    let open = "([{";
    let close = ")]}";
    
    for(let x of s){
        
        if(x === '(' || x === '{' || x === '['){
            stack.push(x);
        }else{
            
            if(stack.length === 0){
                return false;
            }else{
                
                let character = stack[stack.length-1];
                
                if(open.indexOf(character) === close.indexOf(x)){
                    stack.pop();
                }else{
                    return false;
                }
                
            }
            
        }
    }
    
    if(stack.length > 0){
        return false;
    }
    
    return true;
    
};
