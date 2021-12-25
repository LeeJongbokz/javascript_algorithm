// 인덱스 0부터 쭉 더하면서 더해서 커지면 시작점을 다음 인덱스로 이동
// 더하다가 같아지면 answer++하고 시작점을 다음 인덱스로 이동

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let goal = 0,
  answer = 0,
  input = [];
rl.on("line", function (line) {
  if (goal !== 0) {
    input = line.split(" ").map((item) => {
      return Number(item);
    });
  }
  if (input.length === 0) goal = Number(line.split(" ")[1]);
  if (input.length !== 0) rl.close();
}).on("close", function () {
  let start = 0;
  while (start < input.length) {
    let total = 0;

    for (let index = start; index < input.length; index++) {
      total += input[index];
      if (total > goal) {
        // total = 0;
        break;
      }
      if (total === goal) {
        answer++;
        // total = 0;
        break;
      }
    }

    start++;
  }

  console.log({ answer });
  process.exit();
});
