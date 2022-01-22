function preorder(n) {
  let answer = '';
  const dfs = (n) => {
    if (n > 7) return;
    else {
      answer += (n + ' ');
      dfs(n * 2);
      dfs(n * 2 + 1);
    }
  }
  dfs(n);
  return answer;
}

function inorder(n) {
  let answer = '';
  const dfs = (n) => {
    if (n > 7) return;
    else {
      dfs(n * 2);
      answer += (n + ' ');
      dfs(n * 2 + 1);
    }
  }
  dfs(n);
  return answer;
}

function postorder(n) {
  let answer = '';
  const dfs = (n) => {
    if (n > 7) return;
    else {
      dfs(n * 2);
      dfs(n * 2 + 1);
      answer += (n + ' ');
    }
  }
  dfs(n);
  return answer;
}

console.log(preorder(1));
console.log(inorder(1));
console.log(postorder(1));