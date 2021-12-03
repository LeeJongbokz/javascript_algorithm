// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

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
  let small = Number(inputs[0]);
  for (let index = 0; index < inputs.length; index++) {
    // console.log({ small });
    if (Number(small > Number(inputs[index]))) small = Number(inputs[index]);
  }

  console.log({ small });
  process.exit();
});
