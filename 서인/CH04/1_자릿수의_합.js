// 자릿수의 합
// 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력

function solution(n, arr) {
    let answer;
    let max = Number.MIN_SAFE_INTEGER;
  
    for (let i = 0; i < arr.length; i++) {
      let num =
        (arr[i] % 10) +
        Math.floor((arr[i] / 10) % 10) +
        Math.floor((arr[i] / 100) % 10);
  
      if (num > max) {
        max = num;
        answer = arr[i];
      }
  
      if (num == max) {
        if (arr[i] > answer) {
          answer = arr[i];
        }
      }
    }
  
    return answer;
  }
  
  let arr = [128, 460, 603, 40, 521, 137, 123];
  console.log(solution(7, arr));
  