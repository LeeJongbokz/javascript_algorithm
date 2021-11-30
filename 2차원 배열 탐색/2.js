function solution(arr) {
  let max = arr[0];
  let answer = 1;

  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      answer += 1;
    }
  }

  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
