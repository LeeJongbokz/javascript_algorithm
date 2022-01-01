var destCity = function(paths) {
    
    
    let set = new Set();
    
    for(let i=0; i<paths.length; i++){
        set.add(paths[i][0]);
        set.add(paths[i][1]);
    }
    
    for(let i=0; i<paths.length; i++){
        set.delete(paths[i][0]);
    }
    
    const arr = Array.from(set);
    
    return arr[0];

};
