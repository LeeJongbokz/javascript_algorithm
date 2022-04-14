// 636. Exclusive Time of Functions
// https://leetcode.com/problems/exclusive-time-of-functions/
const n = 2,
  logs = ["0:start:0", "1:start:2", "1:end:5", "0:end:6"];
// const n = 1,
//   logs = [
//     "0:start:0",
//     "0:start:2",
//     "0:end:5",
//     "0:start:6",
//     "0:end:6",
//     "0:end:7",
//   ];
// const n = 2,
//   logs = [
//     "0:start:0",
//     "0:start:2",
//     "0:end:5",
//     "1:start:6",
//     "1:end:6",
//     "0:end:7",
//   ];

// const n = 2;
// logs = ["0:start:0", "0:start:2", "0:end:5", "1:start:7", "1:end:7", "0:end:8"];

// const starts = [0, 1, 0, 0, 0, 0, 0]; // logs길이만큼 0으로 초기화
// const ends = [0, 0, 0, 0, 0, 0, 0];
// const time = [0, 0, 0, 0, 0, 1, 0]; // logs길이만큼 0으로 초기화 -> 카운트 (카운트는 안 됨)

// const  logs = ["0:start:0","1:start:2","1:end:5","0:end:6"]
// const time = [0, 0, 1, 0, 1, 0];
// const time = [0, 0, 1, 2, 1, 0]; // indexOF (start 인덱스를 첫 번째로 지정)

// 아니면 fill
// 노노 스택 사용
// 꺼내서 키 없으면 넣고 ++
// 있는 키면 값 ++
// -> 밸류 ++
// const answer = {
//   0: 0,
//   1: 0,
// };

// 아니면
// n개만큼 배열 만들기 -> ㄴㄴ 중간에 껴든애 카운트 하는게 포인트
// 0: [0,0,0,0,0,0]
// 1: [0,1,0,0,1,0]

//   const test = {
//     0: [0, 6],
//     1: [2, 5],
//   };

//   const test = {
//     0: [0, 5],
//     0: [2, 7],
//     1: [6, 6],
//   };

//   const test = {
//     0: [0, 5,[2, 7]],
//     1: [6, 6],
//   };

/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */

var exclusiveTime = function (n, logs) {
  // const answer = [];
  // const time = {};
  const counts = {};

  const last = logs[logs.length - 1].split(":")[2] * 1;
  if (n === 1) return [last + 1];
  // const timeLine = new Array(last).fill(0);
  logs.forEach((elem, idx) => {
    const [id, isStart, time] = elem.split(":");
    const [prevId, prevIsStart, prevTime] =
      idx === 0 ? [undefined, undefined, undefined] : logs[idx - 1].split(":");
    // timeLine[time] = id * 1;
    // console.log({ elem });
    // ["0:start:0","1:start:2","1:end:5","0:end:6"]
    if (isStart === "start") {
      if (idx !== 0) {
        // start start
        if (prevIsStart === "start") {
          counts[prevId] = counts[prevId]
            ? counts[prevId] + time * 1 - prevTime * 1
            : time * 1 - prevTime * 1;
          // end start
        } else {
          if (prevId !== id) {
            counts[prevId] = counts[prevId]
              ? counts[prevId] + time * 1 - prevTime * 1 - 1
              : time * 1 - prevTime * 1 - 1;
          }
          // counts[prevId] = counts[prevId]
          //   ? counts[prevId] + time * 1 - prevTime * 1
          //   : time * 1 - prevTime * 1;
        }
      }
      // end일 경우
    } else {
      // start end
      if (prevIsStart === "start") {
        counts[id] = counts[id]
          ? counts[id] + time * 1 - prevTime * 1 + 1
          : time * 1 - prevTime * 1 + 1;
        // end end
      } else {
        counts[id] = counts[id]
          ? counts[id] + time * 1 - prevTime * 1
          : time * 1 - prevTime * 1;
      }
    }
    // console.log({ counts });
  });

  return Object.values(counts);
};

console.log(exclusiveTime(n, logs));
