// 187. Repeated DNA Sequences
// https://leetcode.com/problems/repeated-dna-sequences/

// 순서 상관없이 a,c,g,t에 포함되는 문자가 연속으로 나오는
// 10자리 문자열을 푸쉬하면 됨
// 섭어레이가 중복되면 안 됨

// that occur more than once !!!
// 한 번 이상 있어야 함

/**
 * @param {string} s
 * @return {string[]}
 */

// const s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
const s = "AAAAAAAAAAAAA";

var findRepeatedDnaSequences = function (s) {
  const letters = ["A", "C", "G", "T"];
  const standard = 10;
  const answer = new Map();
  s = [...s];

  const compLetters = [];
  let start = 0;
  let chars = [];

  // 첫 chars 만들기
  for (let idx = 0; idx < standard; idx++) {
    chars.push(s[idx]);
    start++;
  }
  while (start < s.length + 1) {
    let includeCount = 0;

    for (let idx = 0; idx < chars.length; idx++) {
      if (letters.includes(chars[idx])) {
        includeCount++;
      }
    }

    if (includeCount === 10) {
      const elem = chars.join("");
      if (answer.get(elem)) {
        const num = answer.get(elem);
        answer.set(elem, num + 1);
      } else {
        answer.set(elem, 1);
      }
    }

    // 슬라이딩
    chars.splice(0, 1);
    chars.push(s[start]);

    start++;
  }

  for (const [key, value] of answer.entries()) {
    if (value < 2) answer.delete(key);
  }

  return [...answer.keys()];
};

console.log(findRepeatedDnaSequences(s));
