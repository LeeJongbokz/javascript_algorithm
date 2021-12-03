// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];
let idx = 0;
let big = 0;
let count = 0;
let answer = 0;
rl.on("line", function (line) {
  if (count !== 0) {
    inputs.push({ text: line, length: line.length });
    if (line.length > big) {
      big = line.length;
      answer = idx;
    }
    idx++;
  }
  if (count === 0) count = Number(line);
  if (inputs.length === count) rl.close();
}).on("close", function () {
  //   console.log(inputs);
  //   console.log({ big });
  console.log(inputs[answer].text);
  process.exit();
});
