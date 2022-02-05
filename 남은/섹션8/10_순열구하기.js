// 10이하의 N개의 자연수가 주어지면
// 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합니다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];
let m = 0;

const answer = [];
const temp = [];

const DFS = (depth) => {
  if (depth === m) {
    answer.push([...temp]);
  } else {
    for (let i = 0; i < inputs.length; i++) {
      const num = inputs[i];

      // 중복 불허
      if (depth !== 0 && temp.includes(num)) continue;
      temp[depth] = num;
      DFS(depth + 1);
    }
  }
};

rl.on("line", function (line) {
  if (m !== 0 && inputs.length === 0)
    inputs = line.split(" ").map((item) => item * 1);
  if (inputs.length === 0 && m === 0) m = line.split(" ")[1] * 1;
  if (inputs.length !== 0 && m !== 0) rl.close();
}).on("close", function () {
  let count = m;
  while (count > 0) {
    temp.push(0);
    count--;
  }
  DFS(0);
  //   console.log({ inputs });
  console.log(answer.join("\n"));
  console.log(answer.length);
  process.exit();
});
