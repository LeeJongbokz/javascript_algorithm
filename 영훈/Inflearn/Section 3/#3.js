function solution(str){
  let answer;

  str = str.replace(/[^0-9]/g, '');
  answer = parseInt(str);

  return answer;
}

let str="g0en2T0s8eSoft";
console.log(solution(str));