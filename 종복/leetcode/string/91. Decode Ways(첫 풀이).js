/**
 * @param {string} s
 * @return {number}
 */


let arr = [];

for(let i=1; i<=26; i++){
    arr.push(String(i));
}

let cnt = 0; 

var numDecodings = function(s) {
    
    const go = (s, pos) => {

    if(s.length === pos){
        cnt += 1;
        return; 
    }

    for(let i=1; i<=2; i++){
        let value="";

        if(pos+i <= s.length){
            value = s.substring(pos, pos+i);
            if(arr.includes(value)){
                go(s, pos+i);
            }
        }
    }

    return; 
    }

    go(s, 0);
    
    return cnt;

};





