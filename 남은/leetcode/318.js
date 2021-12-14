// 318. Maximum Product of Word Lengths
// https://leetcode.com/problems/maximum-product-of-word-lengths/
// 알파벳이 겹치지 않는 가장 긴 두 단어 선택, 둘의 길이의 합 리턴

// const words = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"];
// const words = ["a", "ab", "abc", "d", "cd", "bcd", "abcd"];
const words = ["a", "aa", "aaa", "aaaa"];

var maxProduct = function (words) {
  let big = 0;
  words.sort(function (a, b) {
    return b.length - a.length;
  });

  loop1: for (let idx = 0; idx < words.length; idx++) {
    const element = words[idx];
    loop2: for (let idx2 = 0; idx2 < words.length; idx2++) {
      const element2 = words[idx2];
      if (idx === idx2) continue;

      loop3: for (let idx3 = 0; idx3 < element.length; idx3++) {
        const letter = element[idx3];

        if (element2.includes(letter)) {
          //! 하나라도 인클루드 하면 바로 제껴야 한다.
          break loop3;
        } else {
          if (idx3 === element.length - 1) {
            const totalLength = element.length * element2.length;
            if (totalLength > big) {
              big = totalLength;
            }
          }
        }
      }
    }
  }
  return big;
};

console.log(maxProduct(words));
