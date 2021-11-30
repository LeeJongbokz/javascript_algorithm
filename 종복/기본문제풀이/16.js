function solution(s) {
  let answer = "";

  let check = new Array(200).fill(false);

  for (let i = 0; i < s.length; i++) {
    let pos = s.charCodeAt(i);
    if (check[pos] === false) {
      answer += s[i];
      check[pos] = true;
    }
  }

  return answer;
}
console.log(solution("ksekkset"));
