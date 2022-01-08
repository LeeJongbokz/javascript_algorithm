
let stack1;
let stack2;

var MyQueue = function() {
  
    stack1 = [];
    stack2 = [];
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    
    stack1.push(x);
    
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    
    while(stack1.length !== 0){
        let num = stack1.pop();
        stack2.push(num);
    }
    
    let popNum = stack2.pop();
    
    while(stack2.length !== 0){
        let num = stack2.pop();
        stack1.push(num);
    }
    
    return popNum;
    
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    
     while(stack1.length !== 0){
        let num = stack1.pop();
        stack2.push(num);
    }
    
    let peekNum = stack2[stack2.length-1];
    
    while(stack2.length !== 0){
        let num = stack2.pop();
        stack1.push(num);
    }
    
    return peekNum;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    
    if(stack1.length === 0){
        return true;
    }else{
        return false;
    }
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
