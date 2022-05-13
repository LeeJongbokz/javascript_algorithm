// 1710. Maximum Units on a Truck
// https://leetcode.com/problems/maximum-units-on-a-truck/
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */

// const boxTypes = [
//     [1, 3],
//     [2, 2],
//     [3, 1],
//   ],
//   truckSize = 4;

// const boxTypes = [
//     [5, 10],
//     [2, 5],
//     [4, 7],
//     [3, 9],
//   ],
//   truckSize = 10;

const boxTypes = [
    [1, 3],
    [5, 5],
    [2, 5],
    [4, 2],
    [4, 1],
    [3, 1],
    [2, 2],
    [1, 3],
    [2, 5],
    [3, 2],
  ],
  truckSize = 35;

// 전체 수가 트럭사이즈보다 작으면 다 리턴
// 큰 친구부터 넣기 시작해야함 -> 맥시멈이니까

var maximumUnits = function (boxTypes, truckSize) {
  let answer = 0,
    loadedBoxes = 0;

  // [[1,4],[2,3]]

  boxTypes.sort(function (a, b) {
    return b[1] - a[1];
  });

  boxTypes.forEach(([box, qty]) => {
    if (loadedBoxes < truckSize) {
      const leftSpace = truckSize - loadedBoxes;

      if (leftSpace >= box) {
        loadedBoxes += box;
        answer += qty * box;
      } else {
        loadedBoxes += leftSpace;
        answer += qty * leftSpace;
      }
    }
  });

  return answer;
};
console.log(maximumUnits(boxTypes, truckSize));
