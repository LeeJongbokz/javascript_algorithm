// k개의 조합을 구하는데 그 조합이 m의 배수여야 함

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = 0;
let n, k, m;
let inputs;

const DFS = (depth, idx, currentTotal) => {
  if (depth === k) {
    if (currentTotal % m === 0) {
      answer++;
    }
  } else {
    for (let index = idx; index < inputs.length; index++) {
      const elem = inputs[index];
      // 중복되면 안 되니까 index+1
      DFS(depth + 1, index + 1, currentTotal + elem);
    }
  }
};

let rowCount = 0;
rl.on("line", function (line) {
  if (rowCount === 0) {
    const [rawN, rawK] = line.split(" ");
    n = rawN * 1;
    k = rawK * 1;
  }
  if (rowCount === 1) {
    inputs = line.split(" ").map((item) => item * 1);
  }
  if (rowCount === 2) {
    m = line * 1;
    rl.close();
  }
  rowCount++;
}).on("close", function () {
  console.log({ k });
  console.log({ m });
  DFS(0, 0, 0);
  console.log({ answer });
  process.exit();
});
