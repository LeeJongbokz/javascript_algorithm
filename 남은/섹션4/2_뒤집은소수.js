// N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요.
// 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다.
// 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0,
  inputs = [],
  inputsConverted = [];
const answer = [];
rl.on("line", function (line) {
  if (count !== 0) inputs = line.split(" ");
  if (count === 0) count = Number(line);
  if (inputs.length !== 0) rl.close();
}).on("close", function () {
  inputs.forEach((element) => {
    let num = "";
    for (let index = 0; index < element.length; index++) {
      num += element[element.length - index - 1];
    }
    inputsConverted.push(Number(num));
  });

  /////////////////////////

  inputsConverted.forEach((element) => {
    let isPrime = true;
    if (element < 2) return;
    for (let index = 2; index < Math.sqrt(element); index++) {
      if (element % index === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) answer.push(element);
  });

  console.log({ answer });
  process.exit();
});
