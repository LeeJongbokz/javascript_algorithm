function solution(board) {
  let answer = 0;
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  const len = board.length;

  const dfs = (y, x) => {
    if (y === len - 1 && x === len - 1) answer++;
    else {
      for (let k = 0; k < 4; k++) {
        let ny = y + dy[k];
        let nx = x + dx[k];
        if (ny >= 0 && nx >= 0 && ny < len && nx < len && board[ny][nx] === 0) {
          board[ny][nx] = 1;
          dfs(ny, nx);
          board[ny][nx] = 0;
        }
      }
    }
  }

  board[0][0] = 1;
  dfs(0, 0);

  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0]
];

console.log(solution(arr));