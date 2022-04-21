// 1143. Longest Common Subsequence
// https://leetcode.com/problems/longest-common-subsequence/

// const text1 = "abcde",
//   text2 = "ace";

// const text1 = "abc",
//   text2 = "abc";

// const text1 = "abc",
//   text2 = "def";

// const text1 = "ezupkr",
//   text2 = "ubmrapg";

// const text1 = "oxcpqrsvwf",
//   text2 = "shmtulqrypy";

const text1 = "bsbininm",
  text2 = "jmjkbkjkv";

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let answer = 0;
  let i = 0;
  //   text1 = new Set(text1);
  //   text1 = [...text1];

  while (i < text2.length) {
    let lastIdx = 0;
    let tempAnswer = 0;
    for (let idx = i; idx < text2.length; idx++) {
      const elem = text2[idx];

      for (let index = lastIdx; index < text1.length; index++) {
        const element = text1[index];
        // 이미 체크한 문자는 다시 값으로 치면 안 됨
        if (elem === element) {
          tempAnswer++;
          lastIdx = index;

          console.log({ elem });
          //   console.log({ element });
          console.log({ lastIdx });
          console.log({ tempAnswer });
        }
      }
    }

    if (tempAnswer > answer) answer = tempAnswer;

    i++;
  }

  return answer;
};
console.log(longestCommonSubsequence(text1, text2));
