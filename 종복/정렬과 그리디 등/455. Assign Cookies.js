
var findContentChildren = function(g, s) {
    
    g.sort(function(a,b){
        return a-b;
    });
    
    s.sort(function(a,b){
        return a-b;
    });
    
    let res = 0;
    let j = 0; 
    
    for(let num of s){
        if(num >= g[j]){
            res += 1;
            j += 1;
        }
    }
    
    return res;
    
};
