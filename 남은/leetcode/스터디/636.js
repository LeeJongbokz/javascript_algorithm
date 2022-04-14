// 636. Exclusive Time of Functions
// https://leetcode.com/problems/exclusive-time-of-functions/
// const n = 2,
//   logs = ["0:start:0", "1:start:2", "1:end:5", "0:end:6"];
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

const n = 8,
  logs = [
    "0:start:0",
    "1:start:5",
    "2:start:6",
    "3:start:9",
    "4:start:11",
    "5:start:12",
    "6:start:14",
    "7:start:15",
    "1:start:24",
    "1:end:29",
    "7:end:34",
    "6:end:37",
    "5:end:39",
    "4:end:40",
    "3:end:45",
    "0:start:49",
    "0:end:54",
    "5:start:55",
    "5:end:59",
    "4:start:63",
    "4:end:66",
    "2:start:69",
    "2:end:70",
    "2:start:74",
    "6:start:78",
    "0:start:79",
    "0:end:80",
    "6:end:85",
    "1:start:89",
    "1:end:93",
    "2:end:96",
    "2:end:100",
    "1:end:102",
    "2:start:105",
    "2:end:109",
    "0:end:114",
  ];

/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */

var exclusiveTime = function (n, logs) {
  const counts = {};

  // const last = logs[logs.length - 1].split(":")[2] * 1;
  // if (n === 1) return [last + 1];

  logs.forEach((elem, idx) => {
    const [id, isStart, time] = elem.split(":");
    const [prevId, prevIsStart, prevTime] =
      idx === 0 ? [undefined, undefined, undefined] : logs[idx - 1].split(":");

    if (idx === 0) return;

    // 다른 아이디일 경우
    if (id !== prevId) {
      if (isStart === "start") {
        const extra = prevIsStart === "start" ? 0 : -1; // start start면 1더하기 end start면 -1더하기
        counts[prevId] = counts[prevId]
          ? counts[prevId] + Math.abs(prevTime * 1 - time * 1) + extra
          : Math.abs(prevTime * 1 - time * 1) + extra;
      } else {
        const extra = prevIsStart === "start" ? 1 : 0; // start end면 1더하기 end end면 0더하기
        counts[id] = counts[id]
          ? counts[id] + Math.abs(prevTime * 1 - time * 1) + extra
          : Math.abs(prevTime * 1 - time * 1) + extra;
      }

      // 같은 아이디일 경우
    } else {
      if (isStart === "start") {
        const extra = prevIsStart === "start" ? 0 : -1; // start start면 1더하기 end start면 -1더하기

        counts[prevId] = counts[prevId]
          ? counts[prevId] + Math.abs(prevTime * 1 - time * 1) + extra
          : Math.abs(prevTime * 1 - time * 1) + extra;
      } else {
        const extra = prevIsStart === "start" ? 1 : 0; // start end면 1더하기 end end면 0더하기
        counts[prevId] = counts[prevId]
          ? counts[prevId] + Math.abs(prevTime * 1 - time * 1) + extra
          : Math.abs(prevTime * 1 - time * 1) + extra;
      }
    }
    console.log({ counts });
  });

  return Object.values(counts);
};

console.log(exclusiveTime(n, logs));
