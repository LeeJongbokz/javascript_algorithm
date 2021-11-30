function solution(s) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let pos = s.charCodeAt(i);
    let char = s[i];
    if (65 <= pos && pos <= 90) {
      answer += char.toLowerCase();
    } else if (97 <= pos && pos <= 122) {
      answer += char.toUpperCase();
    }
  }

  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
