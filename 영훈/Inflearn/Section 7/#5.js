function solution(size, arr){
  let cash = Array.from({length: size}, () => 0);
  for (const x of arr) {
    let pos = -1;
    for (let i = 0; i < arr.length; i++) {
      if (x === cash[i]) pos = i;
    }
    if (pos === -1) {
      cash.unshift(x);
      cash.pop();
    } else {
      for (let j = pos; j > 0; j--) {
        cash[j] = cash[j - 1];
      }
      cash[0] = x;
    }
  }
  return cash;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));