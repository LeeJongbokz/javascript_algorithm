function solution(arr1, arr2){
  let answer = [];
  let a = 0;
  let b = 0;

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (a < arr1.length && b < arr2.length) {
    if (arr1[a] === arr2[b]) {
      answer.push(arr1[a++]);
      b++;
    } else if (arr1[a] > arr2[b]) b++;
      else a++;
  }
         
  return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));