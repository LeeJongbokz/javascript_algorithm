const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0,
  k = 0,
  anwser = 0,
  inputs = [],
  combs = [];

rl.on("line", function (line) {
  if (count !== 0) inputs = line.split(" ").map((item) => Number(item));
  if (count === 0) [count, k] = line.split(" ").map((item) => Number(item));
  if (inputs.length !== 0) rl.close();
}).on("close", function () {
  for (let idx = 0; idx < inputs.length; idx++) {
    const item = inputs[idx];

    for (let idx2 = 0; idx2 < inputs.length; idx2++) {
      const item2 = inputs[idx2];

      for (let idx3 = 0; idx3 < inputs.length; idx3++) {
        const item3 = inputs[idx3];
        if (idx == idx2 || idx == idx3 || idx2 == idx3) {
          continue;
        }
        combs.push(item + item2 + item3);
      }
    }
  }
  combs.sort(function (a, b) {
    return b - a;
  });

  const set1 = new Set([...combs]);
  const finalArr = Array.from(set1);

  console.log(finalArr[k - 1]);
  process.exit();
});
