var isPrefixOfWord = function(sentence, searchWord) {
  let sentenceArray = sentence.split(' ');
  for (let i = 0; i < sentenceArray.length; i++) {
    let prefix = true;
    for (let j = 0; j < searchWord.length; j++) {
      if (sentenceArray[i][j] !== searchWord[j]) {
        prefix = false;
        break;
      }
    }
    if (prefix) return i + 1;
  }

  return -1;
};

let sentence = "i love eating burger";
let searchWord = "burg";
console.log(isPrefixOfWord(sentence, searchWord));

// startsWith 사용

// const isPrefixOfWord = (sentence, searchWord) => {
//   const words = sentence.split(' ');
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].startsWith(searchWord)) return i + 1;
//   }
//   return -1;
// };

// let sentence = "i love eating burger";
// let searchWord = "burg";
// console.log(isPrefixOfWord(sentence, searchWord));