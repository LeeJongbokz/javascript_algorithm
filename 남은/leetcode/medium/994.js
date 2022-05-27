// https://leetcode.com/problems/rotting-oranges/
// 994. Rotting Oranges
// 이건 BFS로 풀어야 함
// https://leetcode.com/problems/rotting-oranges/discuss/1858396/JavaScript-or-Clean-BFS-w-Explanation-or-99.5
// https://leetcode.com/problems/rotting-oranges/discuss/2053319/Javascript-Clean-and-Easy-to-understand-BFS-solution
/**
 * @param {number[][]} grid
 * @return {number}
 */

const grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

// const grid = [
//   [2, 1, 1],
//   [1, 1, 1],
//   [0, 1, 2],
// ];
//////////////// -1
// const grid = [
//   [2, 1, 1],
//   [0, 1, 1],
//   [1, 0, 1],
// ];

// const grid = [[0, 2]];
// const grid = [[1, 2]];

// minutes  until no cell has a fresh orange.

var orangesRotting = function (grid) {
  let answer = 0,
    fresh = 0;
  let queue = [];

  const x = [-0, 1, 0, -1];
  const y = [1, 0, -1, 0];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        // BFS(i, j);
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        fresh++;
      }
    }
  }

  // BFS니까 모든 깊이를 다 돌 필요가 없고, 한 스텝 나아가면 거기서 뻗어나가는 다음 스텝만 보면 되니까
  // next를 만들어서 그걸로 바꾸는 것
  while (fresh && queue.length) {
    answer++;
    const next = [];
    for (const [i, j] of queue) {
      for (let idx = 0; idx < x.length; idx++) {
        const elemX = i + x[idx];
        const elemY = j + y[idx];

        if (
          elemX > -1 &&
          elemY > -1 &&
          elemX < grid.length &&
          elemY < grid[0].length &&
          grid[elemX][elemY] === 1
        ) {
          fresh--;
          grid[elemX][elemY] = 2;
          next.push([elemX, elemY]);
        }
      }
    }
    queue = next;
  }

  return fresh ? -1 : answer;
};
console.log(orangesRotting(grid));
