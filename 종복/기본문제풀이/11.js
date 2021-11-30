function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    let pos = s.charCodeAt(i);
    if (65 <= pos && pos <= 90) {
      answer += 1;
    }
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
