// 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let count = 0,
  currentTotalPrice = 0,
  max = 0,
  answer = 0,
  borderIdx = 0;
const result = new Map();

rl.on("line", function (line) {
  if (count !== 0) input.push(line.split(" ").map((item) => Number(item)));
  //   if (count !== 0) input.push(line.split(" ").map((item) => ({totalPrice:}));
  if (count === 0) [count, max] = line.split(" ").map((item) => Number(item));
  if (count !== 0 && input.length === count) rl.close();
}).on("close", function () {
  input.forEach((item, idx) => {
    const newItem = {
      totalPrice: item[0] + item[1],
      price: item[0],
      delieveryPrice: item[1],
      //   idx,
    };
    input.splice(idx, 1, newItem);
  });

  // 낮은 가격순으로 정렬
  input.sort(function (a, b) {
    if (a.totalPrice > b.totalPrice) {
      return 1;
    }
    if (a.totalPrice < b.totalPrice) {
      return -1;
    }
    // if (a.totalPrice === b.totalPrice) {
    //   if (a.delieveryPrice > b.delieveryPrice) {
    //     return 1;
    //   }
    //   if (a.delieveryPrice < b.delieveryPrice) {
    //     return -1;
    //   }
    // }
    // a must be equal to b
    return 0;
  });

  for (let idx = 0; idx < input.length; idx++) {
    if (currentTotalPrice + input[idx].totalPrice > max) {
      borderIdx = idx;
      break;
    }

    currentTotalPrice += input[idx].totalPrice;
    answer++;
  }

  max = max - currentTotalPrice;
  for (let idx = borderIdx; idx < input.length; idx++) {
    const element = input[idx];
    const elemTotalPrice = element.delieveryPrice + element.price / 2;
    // console.log({ elemTotalPrice });
    if (elemTotalPrice > max) continue;
    max -= elemTotalPrice;
    answer++;
  }

  console.log({ answer });
  //   console.log({ max });
  process.exit();
});
