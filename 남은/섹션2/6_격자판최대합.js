// 격자판의 가로, 세로, 대각선 중 가장 큰 합의 값을 출력하는 문제

const calcRow = (arr) => {
  let result = 0;
  arr.forEach((element) => {
    result += element;
  });
  return result;
};
const calcColumn = (arr, count, idx) => {
  let result = 0;
  for (let index = 0; index < count; index++) {
    result += arr[idx][index];
  }

  return result;
};
const calcCrossFirst = (arr, count) => {
  let result = 0;
  for (let index = 0; index < count; index++) {
    result += arr[index][index];
  }

  return result;
};
const calcCrossSecond = (arr, count) => {
  let result = 0;
  for (let index = 0; index < count; index++) {
    result += arr[count - 1 - index][index];
  }

  return result;
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0,
  rowBig = 0,
  columnBig = 0,
  crossBig = 0,
  totalBig = 0;
const inputs = [];
rl.on("line", function (line) {
  if (count !== 0) inputs.push(line.split(" ").map((num) => Number(num)));
  if (count === 0) count = Number(line);
  if (count !== 0 && inputs.length === count) rl.close();
}).on("close", function () {
  //   console.log({ inputs });
  for (let index = 0; index < count; index++) {
    // row
    let rowResult = calcRow(inputs[index]);
    if (rowResult > rowBig) rowBig = rowResult;
    if (rowBig > totalBig) totalBig = rowBig;
    // column
    let columnResult = calcColumn(inputs, count, index);
    if (columnResult > columnBig) columnBig = columnResult;
    if (columnBig > totalBig) totalBig = columnBig;
  }

  // cross 1
  let crossFirstResult = calcCrossFirst(inputs, count);
  if (crossFirstResult > crossBig) crossBig = crossFirstResult;
  // cross 2(왼쪽위에서 오른쪽 아래로 내려오는)
  let crossSecondResult = calcCrossSecond(inputs, count);
  if (crossSecondResult > crossBig) crossBig = crossSecondResult;
  if (crossBig > totalBig) totalBig = crossBig;

  //   console.log({ rowBig });
  //   console.log({ columnBig });
  //   console.log({ crossBig });
  console.log({ totalBig });
  process.exit();
});
