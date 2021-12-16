function solution(test){
  let answer = 0;
  
  for (let i = 1; i <= test[0].length; i++) {
    for (let j = 1; j <= test[0].length; j++) {
      if (i <= j) continue; // i가 j보다 큰 경우만
      let check = true; // i가 j보다 왼쪽에 있어야함
      for (let k = 0; k < test.length; k++) {
        let pi = 0;
        let pj = 0;
        for (let l = 0; l < test[0].length; l++) {
          if (i === test[k][l]) pi = l;
          if (j === test[k][l]) pj = l;
        }
        if (pi > pj) check = false; // i가 j보다 오른쪽에 있으면 false
      }
      if (check) answer++;
    }
  }

  return answer;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));