

var reverseString = function(s) {
  
  let str = "";
  
  for(let i=0; i<s.length; i++){
     str += s[i]; 
  }
  
  str = str.split("").reverse().join("");
  
  for(let i=0; i<s.length; i++){
    s[i] = str[i];
  }
  
  return s;
}
