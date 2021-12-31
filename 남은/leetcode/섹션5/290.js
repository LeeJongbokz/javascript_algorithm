// 290. Word Pattern
// https://leetcode.com/problems/word-pattern/

// const pattern = "abba",
//   s = "dog cat cat dog";

// const pattern = "abba",
//   s = "dog cat cat fish";

// const pattern = "aaaa",
//   s = "dog cat cat dog";

const pattern = "abba",
  s = "dog dog dog dog";

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const matchCheck = new Map();
  const letters = s.split(" ");
  const patterns = pattern.split("");

  if (letters.length !== patterns.length) return false;

  for (let idx = 0; idx < patterns.length; idx++) {
    const pat = patterns[idx];
    if (matchCheck.get(pat)) {
      // 기존 값 꺼내서 비교
      const existStr = matchCheck.get(pat);

      //   console.log({ existStr });
      if (existStr !== letters[idx]) {
        return false;
      }
    } else {
      if ([...matchCheck.values()].includes(letters[idx])) return false;
      matchCheck.set(patterns[idx], letters[idx]);
    }
  }

  return true;
};

console.log(wordPattern(pattern, s));
