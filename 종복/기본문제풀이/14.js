function solution(s) {
  let answer = s[0];
  let longest = s[0].length;

  for (let i = 1; i < s.length; i++) {
    if (longest < s[i].length) {
      longest = s[i].length;
      answer = s[i];
    }
  }
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
