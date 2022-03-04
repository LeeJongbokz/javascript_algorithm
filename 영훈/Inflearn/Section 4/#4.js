function solution(m, product){
  let answer = 0;

  for (let i = 0; i < product.length; i++) {
    let clonedProduct = product.map(v => v.slice());
    clonedProduct[i][0] /= 2;
    clonedProduct.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
    let sum = 0;
    let count = 0;
    for (let j = 0; j < clonedProduct.length; j++) {
      sum += clonedProduct[j][0] + clonedProduct[j][1];
      if (m >= sum) count++;
    }
    if (count > answer) answer = count;
  }
  
  return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));