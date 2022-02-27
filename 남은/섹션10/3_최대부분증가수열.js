const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = 0;
let big = 1;
let dpTable;
let inputs;

let inputCount = 0;
rl.on("line", function (line) {
  if (inputCount !== 0) {
    inputs = line.split(" ").map((num) => num * 1);
    dpTable = Array.from({ length: inputs.length }, () => 0);
    rl.close();
  }
  inputCount++;
  // 0으로 초기화
}).on("close", function () {
  for (let idx = 0; idx < inputs.length; idx++) {
    //   본인 수 이전에서 본인보다 작은 수의 dp 값 중 가장 큰 값을 가져와야 함
    const elem = inputs[idx];

    if (idx === 0) {
      dpTable[idx] = 1;
      continue;
    }

    // big = dpTable[idx] === 0 ? 1 : dpTable[idx];
    big = dpTable[idx];

    // elem보다 작은 수 중에 dp가 최대인 수를 구해야 함
    for (let idx2 = 0; idx2 < idx; idx2++) {
      const elem2 = inputs[idx2];
      // elem보다 작은 수만 취급
      if (elem2 > elem) continue;
      else {
        dpNum = dpTable[idx2];
        // big을 제일 큰 수로 만들어 줌
        if (dpNum > big) big = dpNum;
      }
    }

    // inner 포문 종료 후 dpTable 값 세팅
    dpTable[idx] = big + 1;

    // console.log({ dpTable });
  }

  answer = Math.max(...dpTable);
  console.log({ answer });
  process.exit();
});
