function solution(s){         
  let answer=0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) answer++;
  }

  return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));