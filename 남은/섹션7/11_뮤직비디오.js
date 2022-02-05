const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 총 n곡
// m개의 비디오 안에 다 넣어야 함
// 그러려면 한 비디오당 몇 분 짜리여야 하는가 (모든 비디오는 같은 길이어야 함)
let standard = 0;
let input = [];

let answer = 0,
  mid = 0,
  right = 0;

rl.on("line", function (line) {
  if (standard !== 0 && input.length === 0)
    input = line.split(" ").map((item) => Number(item));
  if (input.length === 0 && standard === 0)
    standard = Number(line.split(" ")[1]);
  if (input.length !== 0 && standard !== 0) rl.close();
}).on("close", function () {
  // 총 합을 맥스 넘버인 right으로 정한다.
  right = input.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  answer = right;
  mid = Math.floor(right / 2);
  // console.log({ right });

  while (mid < right) {
    let count = 0;
    let tempTotal = 0;
    for (const key in input) {
      tempTotal += input[key];
      if (tempTotal > right) {
        count++;
        tempTotal = input[key];
      }
    }

    // answer에 담고 mid를 늘린다.
    if (count === standard) {
      // right를 줄인다.
    } else if (count < standard) {
      // mid를 늘린다.
    } else if (count > standard) {
    }
  }

  process.exit();
});
