 /**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    let m = {};
    
    for ( let x of magazine ) {
        m[x] = m[x] ? m[x] + 1 : 1;
    }
    
    for ( let x of ransomNote ){
        if(!m[x] ) return false;
        m[x] = m[x] - 1;
    }
    
    return true;
};