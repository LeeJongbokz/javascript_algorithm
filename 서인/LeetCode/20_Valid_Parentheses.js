/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = [];
    const map = {'(' : ')', "[" : "]", "{" : "}"}
    
    for (let x of s){
        if (map[x]){
            stack.push(map[x])
        } else if (x !== stack.pop()){
            return false
        }
    }
    
    if (stack.length === 0) return true
    else return false
};