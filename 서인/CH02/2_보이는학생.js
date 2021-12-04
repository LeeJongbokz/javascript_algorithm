// 앞 인덱스의 value보다 작거나 같은 index 카운트 안함

function solution(arr) {
    let answer = 0;
    let max = Number.MIN_SAFE_INTEGER;
  
    for (let x of arr) {
      if (x > max) {
        answer++;
        max = x;
      }
    }
  
    return answer;
  }
  
  let arr = [130, 135, 148, 140, 145, 150, 150, 153];
  console.log(solution(arr));
  