// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
const sentence = "i love eating burger",
  searchWord = "burg";
// const sentence = "this problem is an easy problem",
//   searchWord = "pro";
// const sentence = "i am tired",
//   searchWord = "you";
// const sentence = "i use triple pillow",
//   searchWord = "pill";
// const sentence = "hello from the other side",
//   searchWord = "they";
// const sentence = "hellohello hellohellohello",
//   searchWord = "ell";
var isPrefixOfWord = function (sentence, searchWord) {
  const sentenceArr = sentence.split(" ");
  //   const item = sentenceArr.find((elem) => elem.includes(searchWord));
  const item = sentenceArr.find(
    (elem) =>
      elem.includes(searchWord) && elem.split(searchWord)[0].length === 0
  );
  let idx = sentenceArr.indexOf(item);
  //   if (item.split(searchWord)[0].length !== 0) {
  //       idx = sentenceArr.indexOf(item, );
  // }
  return idx === -1 ? idx : idx + 1;
};
console.log(isPrefixOfWord(sentence, searchWord));
