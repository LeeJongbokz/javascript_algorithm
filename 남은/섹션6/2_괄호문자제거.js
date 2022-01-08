// 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력

//
// (부터 )까지의 문자 제거

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];
rl.on("line", function (line) {
  inputs = [...line];
  rl.close();
}).on("close", function () {
  let isInside = 0;
  const answer = [];
  inputs.forEach((item, idx) => {
    if (item === "(") isInside++;

    if (isInside === 0) answer.push(item);

    if (item === ")") isInside--;
  });
  console.log(answer.join(""));
  process.exit();
});
