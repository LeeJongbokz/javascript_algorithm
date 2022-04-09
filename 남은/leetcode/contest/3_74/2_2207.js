// 2207. Maximize Number of Subsequences in a String
// https://leetcode.com/contest/biweekly-contest-74/problems/maximize-number-of-subsequences-in-a-string/

/**
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */

// const text = "abdcdbc",
//   pattern = "ac";

const text = "aabb",
  pattern = "ab";

var maximumSubsequenceCount = function (text, pattern) {
  //   const originalPatter = pattern;
  //   const originalPatters = [...pattern];
  pattern = [...pattern];
  text = [...text];

  const checkIncludeCount = (newText, pattern, originalLength) => {
    newText = newText.join("");

    let length = 0; // 여기에 차이를 계속 더해야 함
    pattern.forEach((elem, idx) => {
      const count = newText.split(elem).join("").length;
      length += originalLength - count;
      //   console.log({ newText });
      //   console.log({ count });
    });

    const count = newText.split(pattern.join()).join("").length;
    length += originalLength - count;
    // console.log({ newText });
    // console.log({ count });
    console.log({ length });
    return length;
  };

  const returnCount = (idx, text, pattern) => {
    text = [...text];
    const originalText = [...text];
    let count = 0;
    const originalLength = text.length + 1;

    text.splice(idx, 0, pattern[0]);
    // console.log({ text });
    originalText.splice(idx, 0, pattern[1]);
    // console.log({ originalText });
    // return;

    // pattern 인클루드 체크 -> 3개 해야 함
    // -> replace all 해서 다 지우고, 원래 길이랑 비교 (원래 길이는 콘스트로 박아두기)
    // 원래길이-리플레이스올해서 남은길이가 작은게 좋은거임 (많이 겹쳐서 지워진 거니까)

    count = checkIncludeCount(text, pattern, originalLength);
    count =
      count < checkIncludeCount(originalText, pattern, originalLength)
        ? checkIncludeCount(originalText, pattern, originalLength)
        : count;

    return count;
  };

  // 가장 먼저 떠오르는 방안은, 모든 인덱스들에 다 넣어보고,
  //   매번 얼마나 카운트가 되는지 확인한다음에,
  //   가장큰 카운트를 리턴하는 방법이 떠오름

  //  무식하게 하면 이걸 2번씩 해야 하는데, 그럼 너무 시간이 오래 걸릴 것 같으니,
  //  한 번 체크할 때 두 개 다 원큐에 체크하는 것으로 하자!

  let answer = 0;
  text.forEach((elem, idx) => {
    const count = returnCount(idx, text, pattern);
    if (answer < count) answer = count;
  });

  // 마지막에 붙이기
  const count = returnCount(text.length, text, pattern);
  if (answer < count) answer = count;

  return answer;
};

console.log(maximumSubsequenceCount(text, pattern));
