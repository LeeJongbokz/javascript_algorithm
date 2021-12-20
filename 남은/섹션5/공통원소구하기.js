// A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램을 작성하세요.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let countA = 0,
  countB = 0,
  inputA = [],
  inputB = [],
  answer = [];
rl.on("line", function (line) {
  if (inputA.length !== 0 && countB !== 0) {
    inputB = line.split(" ").map((item) => Number(item));
  }
  if (inputA.length !== 0 && countB === 0) countB = Number(line);
  if (countA !== 0 && countB === 0) {
    inputA = line.split(" ").map((item) => {
      return Number(item);
    });
  }

  if (countA === 0 && countB === 0) countA = Number(line);
  if (inputB.length !== 0) rl.close();
}).on("close", function () {
  // 짧은거 기준으로 돌아야 함
  const shortArr = inputA.length < inputB.length ? inputA : inputB;
  const longArr = inputA.length < inputB.length ? inputB : inputA;

  //   const filteredArr = shortArr.filter((item) => {
  //     return longArr.includes(item) ? item : null;
  //   });

  //   console.log({ filteredArr });
  //   shortArr.forE/ach((item) => {
  for (let idx = 0; idx < shortArr.length; idx++) {
    const item = shortArr[idx];
    if (!longArr.includes(item)) continue;
    // if (longArr.includes(item)) {
    if (answer[answer.length - 1] < item) {
      answer.push(item);
    } else if (answer[0] > item) {
      answer.unshift(item);
    } else {
      if (answer.length === 0) {
        answer.push(item);
        continue;
      }
      //   console.log({ item });
      //   console.log({ answer });
      let small = answer[answer.length - 1];
      let smallIdx = answer.length - 1;

      for (let index = answer.length; index > 0; index--) {
        // console.log({ index });
        const element = answer[index];
        smallIdx = index;
        small = element;
      }
      //   console.log({ small });
      //   console.log({ smallIdx });
      answer.splice(smallIdx + 1, 0, item);
    }
  }

  console.log({ answer });
  process.exit();
});
