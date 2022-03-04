function solution(s){  
  let answer;
  let max = 0;
  let sH = new Map();

  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }

  return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));

// function solution(s){  
//   let answer;
//   let max = 0;
//   let obj = {};

//   for (let x of s) {
//     if (obj[x]) obj[x] += 1;
//     else obj[x] = 1;
//   }

//   for (let key in obj) {
//     if (obj[key] > max) {
//       answer = key;
//       max = obj[key];
//     }
//   }

//   return answer;
// }

// let str="BACBACCACCBDEDE";
// console.log(solution(str));