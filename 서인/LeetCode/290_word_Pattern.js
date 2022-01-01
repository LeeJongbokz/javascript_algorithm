/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    let obj = {}
    let arr = s.split(" ")
    let setP = new Set(pattern)
    let setS = new Set(arr)
    
    if (setP.size !== setS.size || pattern.length !== arr.length) return false
    
    
    for( let i=0; i < pattern.length; i++){
          if ( obj[pattern[i]] ){
              if( obj[pattern[i]] !== arr[i] ){
                return false
             }
         }
        else {
           obj[pattern[i]] = arr[i]
        }
    }
    
    return true
};