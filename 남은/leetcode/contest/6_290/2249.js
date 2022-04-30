// 2249. Count Lattice Points Inside a Circle
// https://leetcode.com/contest/weekly-contest-290/problems/count-lattice-points-inside-a-circle/
/**
 * @param {number[][]} circles
 * @return {number}
 */

// const circles = [[2, 2, 1]];
// const circles = [
//   [2, 2, 2],
//   [3, 4, 1],
// ];
const circles = [
  [10, 7, 3],
  [5, 9, 5],
  [10, 4, 2],
  [3, 8, 2],
  [2, 3, 1],
  [2, 10, 1],
  [10, 9, 8],
  [6, 6, 3],
  [8, 6, 3],
  [9, 8, 7],
  [9, 4, 3],
  [7, 4, 1],
  [4, 6, 2],
  [4, 3, 2],
  [8, 3, 3],
];

// 갔는데 정답인 애만 중복 카운트 안 하면 됨
var countLatticePoints = function (circles) {
  const visited = new Set();
  const checkIsInside = (a, b, r, x, y) => {
    if ((a - x) ** 2 + (b - y) ** 2 > r ** 2) return false;
    return true;
  };

  circles.forEach((circle) => {
    const [a, b, r] = circle;
    for (let x = a - r; x <= a + r; x++) {
      for (let y = b - r; y <= b + r; y++) {
        // const coordinate = `${x}${y}`; // 이렇게 하면 (23, 3) (2, 33) 를 구분 못 함
        const coordinate = `${x},${y}`;

        if (checkIsInside(a, b, r, x, y)) visited.add(coordinate);
      }
    }
  });
  return visited.size;
};
console.log(countLatticePoints(circles));
