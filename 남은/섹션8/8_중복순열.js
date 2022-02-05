// 1부터 N까지 번호가 적힌 구슬이 있습니다.
// 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력합니다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
const answer = [];
const temp = [];

const DFS = (depth) => {
  if (depth === m) {
    answer.push([...temp]);
  } else {
    for (let i = 1; i <= n; i++) {
      temp[depth] = i;
      DFS(depth + 1);
    }
  }
};

rl.on("line", function (line) {
  const [num1, num2] = line.split(" ");
  n = num1 * 1;
  m = num2 * 1;
  let count = m;
  while (count > 0) {
    temp.push(0);
    count--;
  }
  rl.close();
}).on("close", function () {
  DFS(0);
  // console.log({ temp });
  console.log(answer.join("\n"));
  console.log(answer.length);
  process.exit();
});
