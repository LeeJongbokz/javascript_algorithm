// #49 Group Anagrams
// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let m = {};
    
    let sorted = x => x.split('').sort().join('');

    for (let i = 0; i < strs.length; i++){
        let str = sorted(strs[i]);
        
        if (m[str] === undefined){
            m[str] = [strs[i]];
        } else {
            m[str].push(strs[i]);
        }
    }
    
    
    
    return Object.values(m).reverse();
};