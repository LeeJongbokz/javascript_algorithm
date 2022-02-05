function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));


// 선택정렬 추가
function selectionSort(arr, start) {
  if (start < arr.length - 1) {
    let min_idx = start;
    for (let i = start; i < arr.length; i++) {
      if (arr[i] < arr[min_idx]) min_idx = i;
    }
    swap(arr, start, min_idx);
    selectionSort(arr, start + 1);
  }
}

function swap(arr, idx1, idx2) {
  let tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
}

let arr = [13, 5, 11, 7, 23, 15];
selectionSort(arr, 0);
console.log(arr);