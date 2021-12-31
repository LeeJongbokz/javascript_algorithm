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
  const answer = [];

  const compLetters = [];
  [...s].forEach((letter, idx) => {
    if (letters.includes(letter)) {
      compLetters.push(letter);

      // 10자리면 정답에 푸쉬
      if (compLetters.length === 10) {
        answer.push(compLetters.join(""));
        compLetters.splice(0);
      }
    } else {
      compLetters.splice(0);
    }
  });

  return answer;
};

console.log(findRepeatedDnaSequences(s));
