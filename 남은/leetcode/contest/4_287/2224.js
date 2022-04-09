// 2224. Minimum Number of Operations to Convert Time
// https://leetcode.com/contest/weekly-contest-287/problems/minimum-number-of-operations-to-convert-time/

// current를 correct로 바꾸기 위해 조절한 미니멈 카운트
// 1, 5, 15, or 60 minutes 만큼 바꿀 수 있음

// 일단 시간을 분으로 치환해야 함
// 그리고 나서 두 시간의 차이점을 구해서
// 가장 큰 단위로 최대한 쪼개야 함 -> 값이 60보다 크면, 60보다 작고 5와같거나 크면, 아님 그 아래면 으로 나눌 수 있음

// 예) 코렉트 240+35 = 275
// 커런트는 120+30 = 150
// 125 -> 60+60+5로 나눠질 수 있음

/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */

// const current = "02:30",
//   correct = "04:35";

// const current = "11:00",
//   correct = "11:01";

const current = "00:00",
  correct = "23:59";

var convertTime = function (current, correct) {
  let answer = 0;

  const currentTotalHour =
    current.split(":")[0] * 60 + current.split(":")[1] * 1;
  const correctTotalHour =
    correct.split(":")[0] * 60 + correct.split(":")[1] * 1;

  let timeDifference = correctTotalHour - currentTotalHour;
  while (timeDifference) {
    if (timeDifference >= 60) timeDifference = timeDifference - 60;
    else if (timeDifference < 60 && timeDifference >= 15)
      timeDifference = timeDifference - 15;
    else if (timeDifference < 15 && timeDifference >= 5)
      timeDifference = timeDifference - 5;
    else timeDifference = timeDifference - 1;

    answer++;
  }

  return answer;
};

console.log(convertTime(current, correct));
