/**
 * @param {string} s
 * @return {number}
 */
function isSubstring(word) {
  let check = new Array(300).fill(0);

  for (let i = 0; i < word.length; i++) {
    let pos = word[i].charCodeAt();
    check[pos] += 1;
  }

  for (let i = 0; i < 300; i++) {
    if (check[i] >= 2) {
      return false;
    }
  }

  return true;
}

var lengthOfLongestSubstring = function (s) {
  let maxlen = Number.MIN_SAFE_INTEGER;

  if (s.length === 0) {
    maxlen = 0;
  }

  for (let i = 0; i < s.length; i++) {
    let word = s[i];
    if (maxlen < word.length) {
      maxlen = word.length;
    }

    for (let j = i + 1; j < s.length; j++) {
      word += s[j];
      if (isSubstring(word)) {
        if (maxlen < word.length) {
          maxlen = word.length;
        }
      } else {
        break;
      }
    }
  }

  return maxlen;
};
