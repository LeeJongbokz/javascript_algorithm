// https://leetcode.com/problems/number-of-islands/
// 200. Number of Islands
/**
 * @param {character[][]} grid
 * @return {number}
 */

// const grid = [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"],
// ];

const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

var numIslands = function (grid) {
  let answer = 0;
  // 문제를 잘 읽어야 함, 얘는 대각선은 포함하면 안 됨
  const x = [-0, 1, 0, -1];
  const y = [1, 0, -1, 0];
  //   const x = [-1, 0, 1, 1, 1, 0, -1, -1];
  //   const y = [1, 1, 1, 0, -1, -1, -1, 0];

  const DFS = (i, j) => {
    // console.log({ grid });
    // console.log({ i, j });
    grid[i][j] = "0";

    // 인접한 1들을 0으로 바꿔서 중복 체크가 되지 않도록 함
    for (let idx = 0; idx < x.length; idx++) {
      const elemX = i * 1 + x[idx];
      const elemY = j * 1 + y[idx];
      //   console.log({ elemX, elemY });

      if (
        elemX > -1 &&
        elemY > -1 &&
        elemX < grid.length &&
        elemY < grid[0].length &&
        grid[elemX][elemY] === "1"
      ) {
        DFS(elemX, elemY);
      }
    }
  };

  for (let i = 0; i < grid.length; i++) {
    // 4
    for (let j = 0; j < grid[0].length; j++) {
      // 5

      if (grid[i][j] === "1") {
        // console.log({ i, j });
        answer++;
        DFS(i, j);
      }
    }
  }

  return answer;
};
console.log(numIslands(grid));
