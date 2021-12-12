var groupAnagrams = function(strs) {
    
    const map = new Map();
    let pos = 0; 
    let res = [];
    
    for(let x of strs){
        
        sortedX = x.split("").sort().join("");
        
        if(map.get(sortedX) !== undefined){
           res[map.get(sortedX)].push(x); 
        }else{
           map.set(sortedX, pos);
           let arr = [];
           arr.push(x);
           res.push(arr);
           pos += 1;
        }
    }
    
    return res;
    
    
};
