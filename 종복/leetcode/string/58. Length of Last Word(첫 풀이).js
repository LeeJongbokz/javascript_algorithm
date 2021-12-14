var lengthOfLastWord = function(s) {
    
    let words = s.split(" ");

    let filtered 
    = words.filter((element) => element !== '');

    return filtered[filtered.length-1].length;

};
