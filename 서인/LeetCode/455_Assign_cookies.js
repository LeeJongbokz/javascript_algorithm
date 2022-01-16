/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
    
    let answer = 0;
    
    g.sort((a,b) => a - b)
    s.sort((a,b) => a - b)
    
    let j = 0;
    for (let x of s){
        if (g[j] <= x){
            answer++;
            j++;
        }
    }
    
    return answer;
};