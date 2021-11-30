function solution(s) {
  let answer;

  let len = s.length;
  let pos = 0;

  if (len % 2 === 0) {
    pos = len / 2 - 1;
    answer = s[pos] + s[pos + 1];
  } else {
    pos = Math.floor(len / 2);
    answer = s[pos];
  }

  return answer;
}

console.log(solution("study"));
console.log(solution("hellow"));
