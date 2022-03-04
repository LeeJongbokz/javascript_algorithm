function solution(n){
  const recursive = (n) => {
    if (n === 0) return;
    else {
      recursive(n - 1);
      console.log(n);
    }
  }
  recursive(n);
}

solution(3);