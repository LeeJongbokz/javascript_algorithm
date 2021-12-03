// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하세요.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
let count = 0;
rl.on("line", function (line) {
  input = line.split("");
  rl.close();
}).on("close", function () {
  input.forEach((str) => {
    // element === keyword && count++;
    if (str.toUpperCase() === str && str.toLowerCase() !== str) count++;
  });

  console.log({ count });
  process.exit();
});
