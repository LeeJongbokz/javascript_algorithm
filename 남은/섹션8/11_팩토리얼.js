// 자연수 N을 입력하면 N!값을 구하세요.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let answer = 0;

const DFS = (depth, currenTotal) => {
  const total = currenTotal * depth;
  answer = total;

  if (depth === 2) return;
  else DFS(depth - 1, total);
};

rl.on("line", function (line) {
  n = line * 1;
  rl.close();
}).on("close", function () {
  DFS(n, 1);
  console.log({ answer });
  process.exit();
});
