const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = 0;
let input;
const tempAnswers = [2, 3, 5];

rl.on("line", function (line) {
  input = line * 1;
  rl.close();
}).on("close", function () {
  if (tempAnswers[input - 1]) {
    answer = tempAnswers[input - 1];
  } else {
    for (let idx = 3; idx < input; idx++) {
      const elem = tempAnswers[idx - 1];
      const elemBefore = tempAnswers[idx - 2];

      if (!tempAnswers[idx]) {
        tempAnswers[idx] = elem + elemBefore;
      }
    }

    answer = tempAnswers[input - 1];
  }
  console.log({ answer });
  process.exit();
});
