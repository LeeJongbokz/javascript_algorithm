function solution(arr){
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > key; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
  }
  return arr;
}

let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));