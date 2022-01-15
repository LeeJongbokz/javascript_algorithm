function solution(target, arr){
  let left = 0;
  let right = arr.length - 1;

  arr.sort((a, b) => a - b);

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (arr[mid] === target) return mid + 1;
    else if (arr[mid] > target) right = mid - 1;
    else left = mid + 1;
  }
}

let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));