function isAnagram(s, str2) {
    let answer;
    if (s.split("").sort().join() === str2) return (answer = true);
    else return (answer = false);
  }
  
  function solution(s, t) {
    let answer = 0;
    let str2 = t.split("").sort().join();
    let cnt = 0;
    let tmp = "";
  
    for (let x of s) {
      cnt++;
      tmp += x;
  
      if (cnt >= t.length) {
        if (isAnagram(tmp, str2)) {
          answer++;
          let str = tmp.substr(1, 2);
          tmp = str;
        } else {
          let str = tmp.substr(1, 2);
          tmp = str;
        }
      }
    }
  
    return answer;
  }
  
  let a = "bacaAacba";
  let b = "abc";
  console.log(solution(a, b));
  