
let answer = [];
let letter = "";


function recursive(digits, pos){
    
    if(pos === digits.length){
        answer.push(letter);
        return; 
    }
    
    let num = digits[pos];
    
    
    if(num === '2'){
        
        for(let i=0; i<3; i++){
            letter += String.fromCharCode(97+i);
            recursive(digits, pos+1);
            letter = letter.slice(0, -1);
        }
        
    }else if(num === '3'){
        
        for(let i=0; i<3; i++){
            letter += String.fromCharCode(100+i);
            recursive(digits, pos+1);
            letter = letter.slice(0, -1);
        }
        
    }else if(num === '4'){
        
           for(let i=0; i<3; i++){
            letter += String.fromCharCode(103+i);
            recursive(digits, pos+1);
            letter = letter.slice(0, -1);
        }
        
        
    }else if(num === '5'){
        
           for(let i=0; i<3; i++){
            letter += String.fromCharCode(106+i);
            recursive(digits, pos+1);
            letter = letter.slice(0, -1);
            }
        
        
    }else if(num === '6'){
        
        
           for(let i=0; i<3; i++){
            letter += String.fromCharCode(109+i);
            recursive(digits, pos+1);
            letter = letter.slice(0, -1);
            }
        
    }else if(num === '7'){
        
          for(let i=0; i<3; i++){
            letter += String.fromCharCode(112+i);
            recursive(digits, pos+1);
            letter = letter.slice(0, -1);
            }
        
    }else if(num === '8'){
        
        
          for(let i=0; i<3; i++){
            letter += String.fromCharCode(115+i);
            recursive(digits, pos+1);
            letter = letter.slice(0, -1);
          }
        
    }else if(num === '9'){
        for(let i=0; i<4; i++){
            letter += String.fromCharCode(118+i);
            recursive(digits, pos+1);
            letter = letter.slice(0, -1);
          }
    }
    
}


var letterCombinations = function(digits) {
    
    if(digits !== ""){    
        recursive(digits, 0);
    }
    
    return answer;
    
    
};
