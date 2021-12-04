// 앞에서 읽어도 뒤에서 읽어도 같은 문자인지 체크

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input,
  answer = "YES";
rl.on("line", function (line) {
  input = line.toLowerCase();
  rl.close();
}).on("close", function () {
  for (let index = 0; index < input.length / 2; index++) {
    if (input[index] !== input[input.length - index - 1]) {
      answer = "NO";
      break;
    }
  }
  console.log({ answer });
  process.exit();
});
