// 2226. Maximum Candies Allocated to K Children
// https://leetcode.com/contest/weekly-contest-287/problems/maximum-candies-allocated-to-k-children/
/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */

const candies = [5, 8, 6],
  k = 3;

// const candies = [2, 5],
//   k = 11;

// const candies = [1, 2, 3, 4, 10],
//   k = 5;

// const candies = [4, 7, 5],
//   k = 4;

// const candies = [4, 7, 5],
//   k = 16;

// 4((4+5)/2)로 시작
// -> 안 되니까 4+4=8/2=4가 됨
// 그래서 무한루프
//
// const candies = [5, 6, 4, 10, 10, 1, 1, 2, 2, 2],
//   k = 9;

// [3,/3,3,/3/,3,3,3/,3,3,3,]
// [4/4/4/4,4/4,4]

// const candies = [9, 10, 1, 2, 10, 9, 9, 10, 2, 2],
//   k = 3;

// const candies = [
//     750, 253, 391, 342, 151, 655, 934, 601, 870, 338, 866, 798, 806, 795, 580,
//     225, 225, 961, 506, 536, 620, 486, 834, 757, 594, 657, 599, 859, 121, 854,
//     537, 903, 391, 555, 983, 269, 898, 961, 109, 748, 832, 608, 659, 233, 608,
//     476, 564, 599, 989, 875, 229, 193, 725, 921, 836, 534, 769, 277, 639, 628,
//     285, 563, 680, 839, 403, 689, 489, 979, 529, 868, 514, 795, 941, 464, 340,
//     700, 997, 792, 422, 645, 745, 637, 908, 701, 597, 455, 135, 629, 981, 178,
//     551, 595, 993, 896, 700, 507, 997, 884, 852, 928,
//   ],
//   k = 46;

var maximumCandies = function (candies, k) {
  const checkPossibility = (quantity) => {
    // let ok = false;
    let count = 0;
    // trunc
    candies.forEach((elem) => {
      count += Math.floor(elem / quantity);
    });

    // console.log({ count });

    // if (count >= k) ok = true;
    // return ok;
    return count >= k;
  };

  ////////////////////

  // let small = Math.min(...candies);
  let small = 0;
  let big = Math.max(...candies);
  // let mid = Math.trunc((big - small) / 2);

  while (small <= big) {
    // let mid = small + Math.trunc((big - small) / 2);
    let mid = Math.trunc((small + big) / 2);
    // console.log({ mid });

    const check = checkPossibility(mid);
    // console.log({ check });
    if (check) {
      // 숫자를 키워봄
      small = mid + 1;
    } else {
      // 숫자를 줄여봄 (너무 나눠주는 수를 크게 잡아서 다 나눠줄 수 없으므로)
      big = mid - 1;
    }
  }

  return big;
};

console.log(maximumCandies(candies, k));

///////
// function binarySearch(arr, elem) {
//   var start = 0; // 0부터 시작
//   var end = arr.length - 1;
//   var middle = Math.floor((start + end) / 2);
//   while (arr[middle] !== elem && start <= end) {
//     if (elem < arr[middle]) end = middle - 1;
//     else start = middle + 1;
//     middle = Math.floor((start + end) / 2);
//   }
//   return arr[middle] === elem ? middle : -1;
// }
