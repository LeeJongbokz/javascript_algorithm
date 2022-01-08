// 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
// (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아닙니다.

// 다 넣고, 마지막꺼랑 첫 번째꺼랑 맞아야 함
// 비교하면서 지워나가기
// 뭐가 남거나 중간에 맞지 않으면 NO출력

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];
rl.on("line", function (line) {
  inputs = [...line];
  //   (는 1 )는 -1로 바꿔서 넣기
  inputs.forEach((item, idx) => {
    if (item === "(") {
      inputs.splice(idx, 1, 1);
    } else {
      inputs.splice(idx, 1, -1);
    }
  });
  rl.close();
}).on("close", function () {
  //   console.log({ inputs });
  let answer = "YES";
  if (inputs.length % 2 !== 0) answer = "NO";

  const count = inputs.length / 2;
  for (let idx = 0; idx < count; idx++) {
    const elemFirst = inputs.shift();
    const elemLast = inputs.pop();
    if (elemFirst + elemLast !== 0) answer = "NO";
  }

  if (inputs.length !== 0) answer = "NO";

  //   return "YES";
  console.log({ answer });
  process.exit();
});
