// 등수 구하기
// 전체 배열에 1을 넣어두고, 작은 값에 1 추가

function solution(arr) {
    let answer = Array(arr.length).fill(1);
  
    for (let i = 0; i < arr.length + 1; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
          answer[i]++;
        }
      }
    }
  
    return answer;
  }
  
  let arr = [87, 89, 92, 100, 76];
  console.log(solution(arr));
  