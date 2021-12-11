// https://leetcode.com/problems/reverse-string/
// # 344
// Reverse String


//1
var reverseString = function(s) {
    return s.reverse()
}



// 2
var reverseString = function(s) {
    if (s.length === 1) return s;
    
    let start = 0; 
    let end = s.length -1;
    
    while ( start < end ){
        [s[start], s[end]] = [s[end], s[start]];
        start++;
        end--;
    }
    
    return s;
};