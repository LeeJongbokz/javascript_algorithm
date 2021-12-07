function solution(s){
  let answer = 'YES';
  let frontStr = '';
  let backStr = '';

  s = s.toLowerCase();
  frontStr = s.substring(0, s.length / 2);

  for (let i = s.length - 1; i > Math.round(s.length / 2 - 1); i--) {
    backStr += s[i];
  }

  if (frontStr !== backStr) answer = 'NO';

  return answer;
}

let str="gOooG";
console.log(solution(str));