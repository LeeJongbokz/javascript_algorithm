// 1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 M개를 뽑는 방법의 수를 출력하는 프로그램을 작성하세요.
// 굉장히 중요한 문제라고 함

// 기존이랑 다른 거는 자기자신을 뽑으면 안 되고
// 이미 뽑은 조합을 또 뽑으면 안 됨

// 그럼 얘도 n차원 배열을 만들어야 하나?

// 이건 그냥 외우기
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answers = [];
let answer = 0;
let n, m;

const DFS = (depth, idx) => {};

rl.on("line", function (line) {
  const [rawN, rawM] = line.split(" ");
  n = rawN * 1;
  m = rawM * 1;
}).on("close", function () {
  console.log({ inputs });
  process.exit();
});
