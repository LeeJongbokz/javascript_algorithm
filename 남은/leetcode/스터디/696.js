// sliding window???? -> 슬라이딩 윈도우가 아니라 투 포인터 알고리즘임
const s = "00110011";
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  s = [...s];
  let answer = 0;

  // 언제 left를 옮겨야 하지????
  let left = 0;
  let right = 0;

  //TODO: 커뮤니티에서 봤던 거 기억하면서 직접 풀어보기
  while (right < s.length - 1) {
    const elem = s[right];
    // stack.push(elem);
    // if (stack.length % 2 === 0) {
    //   // 비교해보고 다시 넣기
    // }
  }

  return answer;
};
console.log(countBinarySubstrings(s));
