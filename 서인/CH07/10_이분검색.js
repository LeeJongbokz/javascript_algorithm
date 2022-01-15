function solution(target, arr) {
    let answer;
    arr.sort((a, b) => a - b);
  
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let middle = parseInt((left + right) / 2);
      if (arr[middle] === target) {
        answer = middle + 1;
        break;
      } else if (arr[middle] > target) right = middle - 1;
      else left = middle + 1;
    }
  
    return answer;
  }
  
  let arr = [23, 87, 65, 12, 57, 32, 99, 81];
  console.log(solution(32, arr));
  