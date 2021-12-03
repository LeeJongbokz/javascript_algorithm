// 자신이 일곱 난쟁이라고 주장하는 사람들이 9명,
// 벗, 일곱 난쟁이의 키의 합이 100임
// 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.
//
// 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];
let total = 0;
let findNum = 0;
//
const sameIdxs = new Set([]);
rl.on("line", function (line) {
  inputs = line.split(" ");
  rl.close();
}).on("close", function () {
  // reduce로 총 합을 구했으면 더 좋았을 것 같다.
  for (let index = 0; index < inputs.length; index++) {
    total = total + Number(inputs[index]);
  }

  findNum = total - 100;

  // findNum을 만족하는 두 인덱스를 구한다.

  inputs.forEach((item, idx) => {
    // let sameNum = Number(item);
    // console.log(Number(item) + sameNum);
    const sameNum = inputs.find(
      (num, idx2) => Number(num) + Number(item) === findNum && idx !== idx2
    );
    // console.log({ item, sameNum });

    if (sameNum) {
      //   sameIdxs.add(idx);
      //   sameIdxs.add(inputs.indexOf(sameNum));
      sameIdxs.add(item);
      sameIdxs.add(sameNum);
    }

    // sameIdxs.push(item);
    // sameIdxs.push(sameNum);
    // console.log({ sameIdxs });
    const newArr = inputs.filter((item) => !sameIdxs.has(item));

    // const removed= inputs.splice()
    console.log({ newArr });
    // if (arr.length !== 0) sameNum = Number(item);
  });
  process.exit();
});
