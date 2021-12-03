// 자신의 상하좌우 숫자보다 큰 수의 개수를 알아내는 프로그램을 짜시오

// TODO: 0보다 작거나 count와 같으면 0으로 처리
const checkIsHill = (arr, count, x, y) => {
  console.log(x, y);
  let isHill = false;
  //   let compare;
  const top = y == count - 1 ? 0 : arr[x][y + 1];
  const bottom = y == 0 ? 0 : arr[x][y - 1];
  const left = x == 0 ? 0 : arr[x - 1][y];
  const right = x == count - 1 ? 0 : arr[x + 1][y];
  if (
    arr[x][y] > top &&
    arr[x][y] > bottom &&
    arr[x][y] > left &&
    arr[x][y] > right
  )
    isHill = true;
  return isHill;
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0,
  answer = 0;
const inputs = [];
rl.on("line", function (line) {
  if (count !== 0) inputs.push(line.split(" ").map((num) => Number(num)));
  if (count === 0) count = Number(line);
  if (count !== 0 && inputs.length === count) rl.close();
}).on("close", function () {
  // 한 줄씩 수행하고 결과 더하기?
  inputs.forEach((row, y) => {
    row.forEach((item, x) => {
      //   console.log(x, y);
      checkIsHill(inputs, count, x, y) && answer++;
    });
  });

  console.log({ answer });
  process.exit();
});
