// 187. Repeated DNA Sequences
// https://leetcode.com/problems/repeated-dna-sequences/

// 순서 상관없이 a,c,g,t가 연속으로 나오는 10자리 문자열을 푸쉬하면 됨
// 중복되면 안 됨

/**
 * @param {string} s
 * @return {string[]}
 */

const s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
// const s = "AAAAAAAAAAAAA";

var findRepeatedDnaSequences = function (s) {
  const letters = ["A", "C", "G", "T"];
  const standard = 10;
  const answer = [];

  const compLetters = [];
  let start = 0;
  while (start < s.length) {
    let count = 0;

    for (let index = start; index < s.length; index++) {
      if (letters.includes(s[index])) {
        compLetters.push(s[index]);
        count++;
      }
      if (count > standard) {
        break;
      }
    }

    start++;
  }

  return answer;
};

console.log(findRepeatedDnaSequences(s));
