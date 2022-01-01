/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    let arrS = s.split("").sort()
    let arrT = t.split("").sort()
    
    for (let i = 0; i < arrT.length; i++) {
        if (arrS[i] !== arrT[i]){
            return arrT[i]
        }    
    }
};