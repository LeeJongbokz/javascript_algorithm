// N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0,
  inputs = [];
const answer = [];
rl.on("line", function (line) {
  if (count !== 0) inputs = line.split(" ").map((num) => Number(num));
  if (count === 0) count = Number(line);
  if (inputs.length !== 0) rl.close();
}).on("close", function () {
  const newArr = inputs.map((item, idx) => {
    return { idx: idx + 1, item };
  });

  newArr.sort(function (a, b) {
    if (a.item < b.item) {
      return 1;
    }
    if (a.item > b.item) {
      return -1;
    }
    return 0;
  });

  //   console.log({ newArr });
  console.log(newArr.map((item) => item.idx).join(" "));

  process.exit();
});
