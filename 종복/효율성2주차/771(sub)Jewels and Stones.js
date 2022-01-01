var numJewelsInStones = function(jewels, stones) {
    
        let cnt = 0; 
        
        for(let i=0; i<stones.length; i++){

            let word = stones[i];
            
            if(jewels.includes(word)){
                cnt += 1;
            }
            
        }
    
        return cnt;
    
};
