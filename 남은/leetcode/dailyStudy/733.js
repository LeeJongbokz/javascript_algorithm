// https://leetcode.com/problems/flood-fill/
// 733. Flood Fill

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

// const image = [
//     [1, 1, 1],
//     [1, 1, 0],
//     [1, 0, 1],
//   ],
//   sr = 1,
//   sc = 1,
//   newColor = 2;

// const image = [
//     [0, 0, 0],
//     [0, 0, 0],
//   ],
//   sr = 0,
//   sc = 0,
//   newColor = 2;

// runtime error
const image = [
    [0, 0, 0],
    [0, 1, 1],
  ],
  sr = 1,
  sc = 1,
  newColor = 1;

// 스타팅포인트 4점부터 시작

var floodFill = function (image, sr, sc, newColor) {
  const value = image[sr][sc];
  if (value === newColor) return image;

  const xLength = image.length;
  const yLength = image[0].length;

  //   const visited = [];
  let visited = 0;
  const checkIsAllConnected = (x, y) => {
    // console.log({ x, y });
    if (`${x},${y}` === `${sr},${sc}`) visited++;
    // console.log({ visited });
    if (visited > yLength) return;
    if (
      x < 0 ||
      y < 0 ||
      x === xLength ||
      y === yLength ||
      image[x][y] !== value
    ) {
      // visited[x][y] = true;
      // console.log({ visited });
      return;
    }
    image[x][y] = newColor;
    checkIsAllConnected(x + 1, y);
    checkIsAllConnected(x - 1, y);
    checkIsAllConnected(x, y + 1);
    checkIsAllConnected(x, y - 1);
  };

  // 중심점
  checkIsAllConnected(sr, sc);

  return image;
};
console.log(floodFill(image, sr, sc, newColor));
