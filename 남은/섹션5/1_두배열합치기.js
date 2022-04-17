// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요

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
  if (inputB[0] > inputA[inputA.length - 1]) {
    answer = [...inputA, ...inputB];
    // return;
  }
  if (inputA[0] > inputB[inputB.length - 1]) {
    answer = [...inputB, ...inputA];
    // return;
  }
  //   더 짧은거 기준으로 돌아야 함
  const leng = inputA.length < inputB.length ? countA : countB;
  let idx = 0;

  while (idx !== leng + 1) {
    if (inputA[0] < inputB[0]) {
      answer.push(inputA[0]);
      inputA.splice(0, 1);
    }
    if (inputA[0] > inputB[0]) {
      answer.push(inputB[0]);
      inputB.splice(0, 1);
    }
    if (inputA[0] === inputB[0]) {
      answer.push(inputA[0]);
      answer.push(inputB[0]);
      inputA.splice(0, 1);
      inputB.splice(0, 1);
    }

    idx++;
  }

  //   for문이 끝나면, 나머지 다 집어넣으면 됨
  if (inputA.length === 0) answer.push(...inputB);
  if (inputB.length === 0) answer.push(...inputA);
  console.log({ answer });

  process.exit();
});
