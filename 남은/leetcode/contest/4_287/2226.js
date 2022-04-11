// 2226. Maximum Candies Allocated to K Children
// https://leetcode.com/contest/weekly-contest-287/problems/maximum-candies-allocated-to-k-children/
/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */

// const candies = [5, 8, 6],
//   k = 3;

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
const candies = [5, 6, 4, 10, 10, 1, 1, 2, 2, 2],
  k = 9;

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

// 카운트가 같다고 끝내는 게 아니라, 그 다음 값도 본 다음에 그 다음 값이 미달이면 그 때 전 값을 반환

// 1과 10 사이에서 가장 크게 나눠 줄 수 있는 수를 구해야 함
// -> 그래서 바이너리 서치를 써야 하는 거임
// 1과 10사이니까 5로 먼저 접근하면
// 10부터 시작해서 [5,5,4, -> 여기서 끝]
// 그럼 1이랑 5사이의 3으로 가서
// [3,3,3,(1) ,4,3]-> 성공! (배열을 정렬한 다음에 뒤에 넣기)
// 그럼 3이랑 5사이의 4로
// [4,4,(2),4,3] -> 실패

//

// 아니면 매번 카운트 하지 말고
// 루프 다 돌고 카운드
// -> ㄴㄴ

// 전 미드 값을 가지고 있어야 할듯 -> ㄴㄴ
// 전 미드보다 1차이가 날 때 고 해야 할 때와 고 하지 말아야 할 때 구분
// 자꾸 왔다리 갔다리만 하는 거..
// 전 미드랑 값이 1차이 나는데, 그 다음거는 수치 미달이고, 그 전 거는 수치 초과이면 그 전거쓰기

////////////////
var maximumCandies = function (candies, k) {
  let answer = 0;
  const total = candies.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  if (total < k) return answer;

  candies.sort(function (a, b) {
    return b - a;
  });

  const originalArr = [...candies];

  let small = originalArr[candies.length - 1];
  let big = originalArr[0];
  let mid = Math.floor((small + big) / 2);
  let exMid = 0;
  let count = 0;
  let exMidCount = 0;
  let go = true;

  while (go) {
    candies = [...originalArr];
    mid = Math.floor((small + big) / 2);
    // console.log({ small });
    // console.log({ big });
    // console.log({ mid });
    answer = mid;

    let idx = 0;
    let totalCount = originalArr.length;
    // candies.forEach((elem, idx) => {
    while (idx < totalCount) {
      const elem = candies[idx];
      // console.log({ candies });
      // console.log({ totalCount });
      // console.log({ elem });

      if (elem >= mid) {
        let value = candies.splice(idx, 1);
        totalCount--;
        count++;
        while (value >= mid) {
          // console.log({ value });
          value -= mid;
          candies.unshift(mid); // 얘는 어쩌피 자기 차례에서 카운트에 더해지니까
          // count++;
          // if (value >= mid) count++;
          totalCount++;
        }

        // console.log({ count });
        if (value) {
          candies.push(value);
          totalCount++;
        }
      }
      idx++;

      // });
    }

    // console.log({ mid });
    // console.log({ exMid });
    // console.log({ count });
    // console.log({ exMidCount });
    if (count < k) {
      // count = 0;

      if (Math.abs(exMid - mid) == 1 && exMidCount >= k && count < k) {
        answer = exMid;
        // go = false;
        return answer;
      }

      big = mid;
      if (small >= big) small = candies[candies.length - 1];
      exMid = mid;
      exMidCount = count;
      count = 0;

      // mid 값을 더 키워야 함
    } else if (count >= k) {
      if (Math.abs(exMid - mid) == 1) {
        if (exMidCount >= k && count <= k) {
          // console.log("here?");
          // answer = exMid;
          // go = false;
          return answer;
        }
        small += 2;
      } else {
        small = mid;
      }
      // console.log({ small });
      exMid = mid;
      exMidCount = count;
      count = 0;
    }
  }

  return answer;
};

console.log(maximumCandies(candies, k));

///////
// function binarySearch(arr, elem) {
//   var start = 0;
//   var end = arr.length - 1;
//   var middle = Math.floor((start + end) / 2);
//   while (arr[middle] !== elem && start <= end) {
//     if (elem < arr[middle]) end = middle - 1;
//     else start = middle + 1;
//     middle = Math.floor((start + end) / 2);
//   }
//   return arr[middle] === elem ? middle : -1;
// }
