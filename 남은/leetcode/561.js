const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = 0,
  nums = [];
halfFirst = [];
halfSecond = [];

rl.on("line", function (line) {
  nums = line.split(",").map((num) => Number(num));
  halfFirst = nums.slice(-nums.length / 2);
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
