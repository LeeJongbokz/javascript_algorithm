function solution(arr){
  let answer = 'NO';
  let flag = 0;
  let total = arr.reduce((a, b) => a + b);
  let n = arr.length;

  const dfs = (l, sum) => {
    if (flag) return;
    if (l === n) {
      if (total - sum === sum) {
        answer = 'YES';
        flag = 1;
      }
    } else {
      dfs(l + 1, sum + arr[l]);
      dfs(l + 1, sum);
    }
  }
  
  dfs(0, 0);
  return answer;
}

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));