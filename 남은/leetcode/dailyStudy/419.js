// 419. Battleships in a Board
// https://leetcode.com/problems/battleships-in-a-board/
/**
 * @param {character[][]} board
 * @return {number}
 */

// const board = [
//   ["X", ".", ".", "X"],
//   [".", ".", ".", "X"],
//   [".", ".", ".", "X"],
// ];

const board = [["."]];

var countBattleships = function (board) {
  let answer = 0;
  const x = [-0, 1, 0, -1];
  const y = [1, 0, -1, 0];

  const DFS = (i, j) => {
    // console.log({ i, j });
    board[i][j] = ".";

    for (let idx = 0; idx < x.length; idx++) {
      const elemX = i + x[idx];
      const elemY = j + y[idx];

      if (
        elemX > -1 &&
        elemY > -1 &&
        elemX < board.length &&
        elemY < board[0].length &&
        board[elemX][elemY] === "X"
      ) {
        DFS(elemX, elemY);
      }
    }
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "X") {
        // console.log({ i, j });

        answer++;
        DFS(i, j);
      }
    }
  }

  return answer;
};
console.log(countBattleships(board));
