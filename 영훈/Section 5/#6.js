function solution(s){  
  let answer;
  let max = 0;
  let obj = {};

  for (let x of s) {
    if (obj[x]) obj[x] += 1;
    else obj[x] = 1;
  }

  for (let key in obj) {
    if (obj[key] > max) {
      answer = key;
      max = obj[key];
    }
  }

  return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));