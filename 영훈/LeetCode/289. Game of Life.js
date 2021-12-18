var gameOfLife = function(board) {
  let dy = [1, 1, 1, 0, -1, -1, -1, 0];
  let dx = [-1, 0, 1, 1, 1, 0, -1, -1];
  let clonedBoard = board.map(v => v.slice());

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < 9; k++) {
        let ny = i + dy[k];
        let nx = j + dx[k];
        if (ny >= 0 && ny < board.length && nx >= 0 && nx < board[0].length) {
          if (clonedBoard[ny][nx] === 1) sum++;
        }
      }
      if (clonedBoard[i][j] === 1 && (sum < 2 || sum > 3)) board[i][j] = 0;
      else if (clonedBoard[i][j] === 0 && sum === 3) board[i][j] = 1;
    }
  }

  return board;
};

let board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
console.log(gameOfLife(board));