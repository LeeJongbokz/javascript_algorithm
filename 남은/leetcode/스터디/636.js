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

// const n = 8,
//   logs = [
//     "0:start:0",
//     "1:start:5",
//     "2:start:6",
//     "3:start:9",
//     "4:start:11",
//     "5:start:12",
//     "6:start:14",
//     "7:start:15",
//     "1:start:24",
//     "1:end:29",
//     "7:end:34",
//     "6:end:37",
//     "5:end:39",
//     "4:end:40",
//     "3:end:45",
//     "0:start:49",
//     "0:end:54",
//     "5:start:55",
//     "5:end:59",
//     "4:start:63",
//     "4:end:66",
//     "2:start:69",
//     "2:end:70",
//     "2:start:74",
//     "6:start:78",
//     "0:start:79",
//     "0:end:80",
//     "6:end:85",
//     "1:start:89",
//     "1:end:93",
//     "2:end:96",
//     "2:end:100",
//     "1:end:102",
//     "2:start:105",
//     "2:end:109",
//     "0:end:114",
//   ];

/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */

var exclusiveTime = function (n, logs) {
  // To track sums of time for each program
  const sums = new Array(n).fill(0);

  // To track calls for each function
  const fnStack = [];

  // To track previous fn call start time
  let prevTime = -1;

  // const last = logs[logs.length - 1].split(":")[2] * 1;
  // if (n === 1) return [last + 1];
  logs.forEach((log) => {
    const [id, startEvent, time] = log.split(":");

    if (startEvent === "start") {
      /**
       * if function exist in stack, then let's update
       * previous function's time before current program starts
       */
      if (fnStack.length) {
        const prevFn = fnStack[fnStack.length - 1];
        sums[prevFn] += time * 1 - prevTime;
      }

      // Let's push this function to the stack and record the time it started
      fnStack.push(id * 1);
      prevTime = time * 1;
    } else {
      // Let's get the last executing function and calculate how much time it took
      const lastFn = fnStack.pop();
      sums[lastFn] += time * 1 - prevTime + 1;

      // Let's reset the prevTime for next function to use to calculate it's total time
      prevTime = time * 1 + 1;
    }

    // console.log({ fnStack });
    // console.log({ sums });
    // console.log({ prevTime });
  });

  return sums;
};

console.log(exclusiveTime(n, logs));
