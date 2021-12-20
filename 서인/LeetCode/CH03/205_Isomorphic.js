/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    
    let answer = true;
    
    if (s.length === 1 && t.length === 1 && s[0] === t[0]) return (answer = true);
    if (s === t) return (answer = true);
    if (s.length !== t.length) return (answer = false);
        
    let S = {};
    let T = {};
      
    for (let i = 0; i < s.length; i++){
        let charS = s[i];
        let charT = t[i];
        
        if (!T[charT]){
            T[charT] = charS;
        }
        
        if (!S[charS]){
            S[charS] = charT;
        }
        
        if (S[charS] !== charT || T[charT] !== charS){
            return (answer = false);
        }
    
        
    }
    return answer;
};