function solution(str1, str2) {
    let answer = "";
  
    let s1 = str1.split("").sort().join();
    let s2 = str2.split("").sort().join();
  
    if (s1 === s2) {
      answer = "YES";
    } else {
      answer = "NO";
    }
  
    return answer;
  }
  
  let a = "AbaAeCe";
  let b = "baeeACA";
  console.log(solution(a, b));
  