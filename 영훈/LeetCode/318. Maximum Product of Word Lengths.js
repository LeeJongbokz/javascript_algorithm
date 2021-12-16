const checkCommon = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) return true;
  }
  return false;
}

var maxProduct = function(words) {
  let answer = 0;
  words = words.sort((a, b) => b.length - a.length);

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      let tmp = words[i].length * words[j].length;
      if (!checkCommon(words[i], words[j]) && tmp > answer) answer = tmp; 
    }
  }

  return answer;
};

let words = ["abcw","baz","foo","bar","xtfn","abcdef"];
console.log(maxProduct(words));