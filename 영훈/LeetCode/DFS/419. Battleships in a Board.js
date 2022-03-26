/**
 * @param {character[][]} board
 * @return {number}
 */
 var countBattleships = function(board) {
  let answer = 0;
  let dy = [-1, 0, 1, 0];
  let dx = [0, 1, 0, -1];
  
  const dfs = (y, x) => {
      board[y][x] = '.';
      for (let k = 0; k < 4; k++) {
          let ny = y + dy[k];
          let nx = x + dx[k];
          if (ny >= 0 && nx >= 0 && ny < board.length && nx < board[0].length) {
              if (board[ny][nx] === 'X') {
                  dfs(ny, nx);
              }
          }
      }
  }
  
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          if (board[i][j] === 'X') {
              dfs(i, j);
              answer++;
          }
      }
  }

  return answer;
};