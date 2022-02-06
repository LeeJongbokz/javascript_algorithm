// 파스칼의 삼각형
// 반대로 올라가야 함
// 반으로 쪼개진 수 들의 조합을 찾아야 함
// 예 16 => 1, 15//2,14...
// 근데 위 처럼 극단적으로 나누지 말고
// 바이너리 서치 처럼 중간으로 나눈거에 근접하게 가야 함
// 아닌가? 위에서 부터 시작해야 하나?
// 4면
// 1 2 3 4
// 1 2 4 3
// 1 4 3 2
// 이런식으로 조합을 구해야 하나?

// 16은 2의 4승, 4스텝
// 4스텝만큼 나눠져야 함
// 16
// 8 8//7 9//9 7
//

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, f;
rl.on("line", function (line) {
  const [nRaw, fRaw] = line.split(" ");
  n = nRaw * 1;
  f = fRaw * 1;
  rl.close();
}).on("close", function () {
  process.exit();
});
