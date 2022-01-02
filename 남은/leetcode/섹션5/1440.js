// 1400. Construct K Palindrome Strings
// https://leetcode.com/problems/construct-k-palindrome-strings/

// const s = "annabelle",
//   k = 2;

// const s = "leetcode",
//   k = 3;

// const s = "true",
//   k = 4;

// const s = "cr",
//   k = 7;

const s = "messi",
  k = 3;
// map을 만들고 그 values를 체크
// 무식한 방법은 모든 조합을 찾고 그 조합의 펠린드롬 여부를 체크하는 것

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  s = [...s];
  const charMap = new Map();

  if (k === s.length) return true;
  if (k > s.length) return false;
  //

  s.forEach((elem) => {
    if (charMap.get(elem)) {
      const num = charMap.get(elem);
      charMap.set(elem, num + 1);
    } else {
      charMap.set(elem, 1);
    }
  });

  let oddCount = 0;
  charMap.forEach(function (value, key) {
    if (value % 2 !== 0) oddCount++;
  });
  //   console.log({ oddCount });
  if (oddCount > k) return false;

  return true;
};
console.log(canConstruct(s, k));
