// 다음과 같이 여러 단위의 동전들이 주어져 있을때
// 거스름돈을 가장 적은 수의 동전으로 교환 해주려면 어떻게 주면 되는가?
// 각 단위의 동전은 무한정 쓸 수 있다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let coinCount = 0,
  variation = [],
  totalPrice = 0;
let lineCount = 0;

let answer = 500;

const DFS = (depth, currentTotal) => {
  if (currentTotal > totalPrice) return;
  if (depth >= answer) return;
  if (currentTotal === totalPrice) {
    answer = depth;
  } else {
    for (let i = 0; i < variation.length; i++) {
      //   temp[depth] = variation[i];
      DFS(depth + 1, currentTotal + variation[i]);
    }
  }
};

rl.on("line", function (line) {
  if (lineCount === 0) coinCount = line * 1;
  if (lineCount === 1) variation = line.split(" ").map((item) => item * 1);
  if (lineCount === 2) {
    totalPrice = line * 1;
    rl.close();
  }

  lineCount++;
}).on("close", function () {
  DFS(0, 0);
  console.log({ answer });
  process.exit();
});
