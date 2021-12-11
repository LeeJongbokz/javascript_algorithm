const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// for문을 한 번만 써야 함

let answer = 0,
  prices = [];

rl.on("line", function (line) {
  prices = line.split(",").map((num) => Number(num));
  rl.close();
}).on("close", function () {
  prices.forEach((buy, buyIdx) => {
    prices.forEach((sell, sellIdx) => {
      if (sell - buy < 0) return;
      if (sell - buy < answer) return;
      if (sellIdx < buyIdx) return;
      answer = sell - buy;
      //   if (sell - buy > answer && sellIdx > buyIdx) answer = sell - buy;
    });
  });

  console.log({ answer });
  process.exit();
});
