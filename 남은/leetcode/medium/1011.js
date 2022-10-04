// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

// 커링써보기
function curry(f) {
  // 커링 변환을 하는 curry(f) 함수
  return function (a) {
    return function (b) {
      return function (c) {
        return f(a, b, c);
      };
    };
  };
}

// days안에 다 배송하려면 min capacity가 뭐여야 하냐
//// days만큼의 조합 중 가장 작은 조합을 찾는 것

// 바이너리서치

// const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   days = 5;

// const weights = [3, 2, 2, 4, 1, 4],
//   days = 3;

const weights = [1, 2, 3, 1, 1],
  days = 4;

// const weights = [10, 50, 100, 100, 50, 100, 100, 100],
//   days = 5;

// const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   days = 1;

const handleValidation = (weights, days, mid) => {
  let currentDays = 0;
  let currentCargo = 0;

  for (let idx = 0; idx < weights.length; idx++) {
    const element = weights[idx];

    currentCargo += element;
    // currentDays가 days보다 크면 중간에 스탑
    if (currentDays > days) return currentDays;
    if (currentCargo === mid) {
      currentDays++;
      currentCargo = 0;
    } else if (currentCargo > mid) {
      currentDays++;
      currentCargo = 0;
      idx--;
      // 마지막 인덱스 고려
    } else if (currentCargo < mid && idx === weights.length - 1) {
      // console.log("last");
      currentDays++;
    }
    // console.log({ mid, element, currentCargo, currentDays });
  }

  return currentDays;
};
const returnDaysRaw = curry(handleValidation);

// days보다 작아도 됨, 대신 그 중 제일 작은 수를 구해야 함
var shipWithinDays = function (weights, days) {
  const returnDays = returnDaysRaw(weights)(days);

  const totalWeight = weights.reduce((partialSum, a) => partialSum + a, 0);
  if (days === 1) return totalWeight;
  if (days > weights.length) return Math.min(...weights);
  //   console.log({ totalWeight });
  const heaviestWeight = Math.max(...weights);
  let left = heaviestWeight,
    right = totalWeight,
    mid;

  while (true) {
    mid = Math.floor((left + right) / 2);
    // console.log({ mid });

    // const currentDays = handleValidation(weights, days, mid);
    const currentDays = returnDays(mid);

    // increment
    if (currentDays > days) {
      //   console.log("small", mid, left, right);
      left = mid;
    }
    // decrement
    else if (currentDays < days) {
      //   console.log("big");
      if (mid - 1 < heaviestWeight) return mid;
      right = mid;
    } else if (currentDays === days) {
      // 지금보다 -1인경우 답이 안되는 경우에 리턴
      //   if (handleValidation(weights, days, mid - 1) > days) return mid;
      const currentDays = returnDays(mid - 1);
      if (currentDays > days) return mid;

      right -= 2;
    }
  }
};

console.log(shipWithinDays(weights, days));
