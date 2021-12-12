var isSubsequence = function(s, t) {
  let answer = false;
  let sIndex = 0;
  
  for (let x of t) {
      if (x === s[sIndex]) sIndex++;
  }
  
  if (sIndex === s.length) answer = true;
  
  return answer;
};

let s = "abc";
let t = "ahbgdc";
console.log(isSubsequence(s, t));