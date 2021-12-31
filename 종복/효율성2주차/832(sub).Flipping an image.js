var flipAndInvertImage = function(image) {
    
    
    let len = image.length;
    
    for(let i=0; i<len; i++){
        image[i] = image[i].reverse();
    }
    
    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            if(image[i][j] === 0){
                image[i][j] = 1;
            }else{
                image[i][j] = 0;
            }
        }
    }
    
    return image; 
    
};
