function solution(board) {
  let answer = 0;
  let len = board.length;
  let dy = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dx = [0, 1, 1, 1, 0, -1, -1, -1];

  const dfs = (y, x) => {
    board[y][x] = 0;
    for (let k = 0; k < 8; k++) {
      let ny = y + dy[k];
      let nx = x + dx[k];
      if (ny >= 0 && nx >= 0 && ny < len && nx < len && board[ny][nx] === 1) {
        dfs(ny, nx);
      }
    }
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        answer++;
        dfs(i, j);
      }
    }
  }

  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0]
];

console.log(solution(arr));