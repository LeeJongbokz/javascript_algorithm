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
  let total = 0;
  let index = 0;
  for (let idx = index; idx < input.length; idx++) {
    const elem = input[idx];
    total += elem;
    console.log({ total });
    console.log({ index });
    if (total > goal) {
      index += 1;
      total = 0;
      continue;
    }
    if (total === goal) {
      index += 1;
      total = 0;
      answer++;
      continue;
    }
  }
  console.log({ answer });
  process.exit();
});
