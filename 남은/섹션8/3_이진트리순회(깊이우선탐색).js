// 7까지 이진트리 구하기

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;
const answer = [];

const DFS = (num = 1) => {
  if (num > input) return;
  answer.push(num);
  DFS(num * 2);
  DFS(num * 2 + 1);
};

rl.on("line", function (line) {
  input = Number(line);
  rl.close();
}).on("close", function () {
  DFS();
  console.log(answer.join(" "));
  process.exit();
});
