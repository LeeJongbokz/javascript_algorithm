// 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;
const answer = [];

const DFS = (num = 1) => {
  if (num > input + 1) return;
  answer.push(num);
  DFS(num + 1);
  DFS(num + 1);
};

rl.on("line", function (line) {
  input = Number(line);
  rl.close();
}).on("close", function () {
  process.exit();
});
