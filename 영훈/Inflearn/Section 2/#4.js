function solution(arr){         
  let answer = 0;
  let cnt = 0;

  arr.forEach((el) => {
    if (el === 1) {
      cnt++;
      answer += cnt;
    } else {
      cnt = 0;
    }
  })
     
  return answer;
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));