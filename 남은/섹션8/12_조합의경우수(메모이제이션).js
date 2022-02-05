// nCr = n-1 C r-1 + n-1 C r
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n,
  r = 0;

let answers;

const DFS = (n, r) => {
  //   console.log({ answers });
  if (n === r || r < 1) {
    // answers[n][r] = 1;
    return 1;
  }
  if (answers[n][r] > 0) {
    // answer = answers[n][r];
    return answers[n][r];
  }
  return (answers[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
};

rl.on("line", function (line) {
  const [nRaw, rRaw] = line.split(" ");
  n = nRaw * 1;
  r = rRaw * 1;
  answers = Array.from(Array(n + 1), () => Array(r + 1).fill(0));
  //   console.log({ answers });
  rl.close();
}).on("close", function () {
  const answer = DFS(n, r);
  console.log({ answer });
  process.exit();
});
