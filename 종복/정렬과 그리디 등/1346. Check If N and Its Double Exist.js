
var checkIfExist = function(arr) {
    
    
    arr.sort(function(a,b){
        return a-b;
    });

    for(let i=0; i<arr.length; i++){
        let num = arr[i];
        
        for(let j=0; j<arr.length; j++){
            if(i!==j && arr[j] === num*2){
                return true;
            }
        }
    }

    return false;
     
    
};
