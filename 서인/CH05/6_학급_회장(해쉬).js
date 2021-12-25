function solution(s) {
    let answer;
    let m = new Map();
  
    for (let x of s) {
      if (m.has(x)) m.set(x, m.get(x) + 1);
      else m.set(x, 1);
    }
    answer = [...m.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  
    return answer;
  }
  
  let str = "BACBACCACCBDEDE";
  console.log(solution(str));
  