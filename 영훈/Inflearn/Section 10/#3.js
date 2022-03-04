function solution(arr) {
  let answer = 0;
  let d = Array.from({ length: arr.length }, () => 0);

  d[0] = 1;
  
  for (let i = 1; i < d.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (d[j] > max && arr[j] < arr[i]) max = d[j];
    }
    d[i] = max + 1;
  }

  for (let i = 0; i < d.length; i++) {
    answer = Math.max(answer, d[i]);
  }

  return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));