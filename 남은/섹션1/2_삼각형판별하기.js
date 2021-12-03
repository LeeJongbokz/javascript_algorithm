// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다

// 삼각형의 조건 : 길이가 가장 긴 변의 길이는 다른 두 변 길이의 합보다 작아야 한다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];
let inputsCopy = [];
rl.on("line", function (line) {
  inputs = line.split(" ");
  inputsCopy = [...inputs];
  rl.close();
}).on("close", function () {
  let big = Number(inputs[0]);
  let bigIdx = 0;
  for (let index = 0; index < inputs.length; index++) {
    // console.log({ small });
    if (Number(big < Number(inputs[index]))) {
      big = Number(inputs[index]);
      bigIdx = index;
    }
  }

  inputsCopy.splice(bigIdx, 1);

  if (big < Number(inputsCopy[0]) + Number(inputsCopy[1])) {
    console.log("YES");
    return;
  }
  console.log("NO");
  process.exit();
});
