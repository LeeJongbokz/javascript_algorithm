// https://leetcode.com/problems/last-stone-weight/
// 1046. Last Stone Weight

// 무게가 같으면 제거
// 같지 않으면 빼기

/**
 * @param {number[]} stones
 * @return {number}
 */

const stones = [2, 2];
// const stones = [2, 7, 4, 1, 8, 1];
// const stones = [1];

var lastStoneWeight = function (stones) {
  if (stones.length === 1) return stones[0];

  //   let answer = 0;

  // [8,8,6,6,4,2,1]

  while (stones.length > 1) {
    // console.log({ stones });
    const biggest = Math.max(...stones); //8 [8,6,6,4,2,1] //6 [6,4,2,1] //4 [2,1]
    const biggestIdx = stones.indexOf(biggest);
    stones.splice(biggestIdx, 1);

    const secondBiggest = Math.max(...stones); //8 [6,6,4,2,1] //6 [4,2,1]
    const secondBiggestIdx = stones.indexOf(secondBiggest);
    stones.splice(secondBiggestIdx, 1);

    if (biggest !== secondBiggest) {
      const substractedValue = biggest - secondBiggest;
      stones.push(substractedValue);
    }
  }

  return stones.length ? stones[0] : 0;
};
console.log(lastStoneWeight(stones));
