function solution(arr) {
  let cnt = 0;
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      cnt += 1;
      answer += cnt;
    } else {
      cnt = 0;
    }
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
