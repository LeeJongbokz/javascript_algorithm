function solution(a, b) {
  let answer = "";

  let len = a.length;

  for (let i = 0; i < len; i++) {
    if (a[i] === 1) {
      if (b[i] === 1) {
        answer += "D";
      } else if (b[i] === 2) {
        answer += "B";
      } else {
        answer += "A";
      }
    } else if (a[i] === 2) {
      if (b[i] === 2) {
        answer += "D";
      } else if (b[i] === 1) {
        answer += "A";
      } else {
        answer += "B";
      }
    } else if (a[i] === 3) {
      if (b[i] === 3) {
        answer += "D";
      } else if (b[i] === 1) {
        answer += "B";
      } else {
        answer += "A";
      }
    }
  }

  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
