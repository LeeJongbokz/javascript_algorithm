// A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고,
// B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
// 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
// 예를 들어 N=5이면
// 회수     1 2 3 4 5
// A의 정보 2 3 3 1 3
// B의 정보 1 1 2 2 3
// 승자     A B A B D
// 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램을 작성하세요.

// a가 이기는 경우
// 1은 3을 이김 => -2
// 2는 1을 이김 => 1
// 3은 2를 이김 => 1
//
// 둘이 비기는 경우  => 0
//
// a가 1을 냈을 때 b가 1을 내면 비김, 2를 내면 짐, 3을 내면 이김
// a가 2을 냈을 때 b가 1을 내면 이김, 2를 내면 비김, 3을 내면 짐
// a가 3을 냈을 때 b가 1을 내면 짐, 2를 내면 이김, 3을 내면 비김
// 2차원으로 나타낼 수 있을 듯, 1,2,3을 좌표로 삼고
// a 기준
// (비김) (짐) (이김)
// (이김) (비김) (짐)
// (짐) (이김) (비김)
//
// a가 이기는 걸 a, b가 이기는 걸 b로, 비기는 걸 d로 바꿔서 나타내면
//
// (D) (B) (A)
// (A) (D) (B)
// (B) (A) (D)
//
// 이제 반목문 돌면서 X, Y좌표 만들고 그 값을 찾으면 됨

// 아래는 무시
// ///////// if(a===1&&b===3)
// switch(a-b){
// case 0: a win
// case -1:
// case 1
//  // -> 1일 경우 a>b
//  // -> 1일 경우 a<b
// }
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const table = [
  ["D", "B", "A"], // a가 1을 냈을 때(가위)
  ["A", "D", "B"], // a가 2를 냈을 때
  ["B", "A", "D"],
];

let count = 0,
  inputsA = [],
  inputsB = [],
  idx = 0;
const answer = [];
rl.on("line", function (line) {
  if (idx === 1) inputsA = line.split(" ").map((num) => Number(num));
  if (idx === 2) inputsB = line.split(" ").map((num) => Number(num));
  if (idx === 0) count = Number(line);
  idx++;
  if (idx === 3) rl.close();
}).on("close", function () {
  //   console.log({ inputsA });
  //   console.log({ inputsB });
  //   console.log(table[1][0]);
  for (let index = 0; index < count; index++) {
    const element = table[inputsA[index] - 1][inputsB[index] - 1];
    answer.push(element);
  }

  //   console.log({ answer });
  console.log(answer.join("\n"));
  process.exit();
});
