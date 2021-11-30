function solution(s) {
  let answer = [];
  answer.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    let searchText = s[i];
    let index = answer.indexOf(searchText);

    if (index !== -1) {
      continue;
    } else {
      answer.push(searchText);
    }
  }

  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
