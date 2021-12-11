// N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력하는 프로그램을 작성하세요.
// 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
// 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

const getAllIndexes = (arr, val) => {
  const indexes = [];
  //   let i = -1;
  //   while ((i = arr.indexOf(val, i + 1)) != -1) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === val) indexes.push(i);
  }
  return indexes;
};
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0,
  big = 0,
  inputs = [],
  inputsConverted = [],
  answer = 0;
rl.on("line", function (line) {
  if (count !== 0) inputs = line.split(" ");
  //   if (count !== 0) inputs = line.split(" ").map((item) => Number(item));
  if (count === 0) count = Number(line);

  if (inputs.length !== 0) rl.close();
}).on("close", function () {
  inputs.forEach((element) => {
    let sum = 0;
    [...element].forEach((elem) => {
      sum += Number(elem);
    });
    inputsConverted.push(sum);
    if (sum > big) big = sum;
  });

  let result = getAllIndexes(inputsConverted, big);

  if (result.length === 0) {
    answer = inputs[result[0]];
    console.log({ answer });
    return;
  }

  result.forEach((elem) => {
    if (Number(inputs[elem]) > answer) answer = Number(inputs[elem]);
  });

  console.log({ answer });
  process.exit();
});
