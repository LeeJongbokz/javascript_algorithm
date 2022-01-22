const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let standard = 0,
  leng = 0;

const inputs = [];

rl.on("line", function (line) {
  const [lengRaw, standardRaw] = line.split(" ").map((item) => Number(item));
  leng = lengRaw;
  standard = standardRaw;

  rl.close();
}).on("close", function () {
  // inputs 만들기
  let i = 0;
  while (true) {
    i++;
    inputs.push(i);
    if (i === leng) break;
  }

  // 2 -> standard
  // 1 (2) 3 (4) 5 (6) 7 (8)

  //   답 구하기
  let start = 0;
  while (true) {
    const item = inputs.shift();
    start++;

    if (start === standard) {
      start = 0;
    } else {
      inputs.push(item);
    }

    if (inputs.length === 1) break;
  }

  console.log(inputs[0]);

  process.exit();
});
