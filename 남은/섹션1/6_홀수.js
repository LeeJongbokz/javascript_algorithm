// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];
rl.on("line", function (line) {
  inputs = line.split(" ");
  rl.close();
}).on("close", function () {
  const newArr = inputs.filter((item) => Number(item) % 2 !== 0);
  console.log({ newArr });

  let small = Number(newArr[0]);
  let total = 0;
  for (let index = 0; index < newArr.length; index++) {
    total = total + Number(newArr[index]);
    if (Number(small > Number(newArr[index]))) small = Number(newArr[index]);
  }

  console.log({ total });
  console.log({ small });
  process.exit();
});
