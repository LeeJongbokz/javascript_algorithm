// 연속된 문자열이 두 번째 줄과 아나그램이 되는 경우의 수 리턴
// 학급회장(6), 최대매출(5) 짬뽕문제
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputA = [],
  inputB = [];
let anagrams = new Map();
let anagramsCopied;
let count = 0,
  answer = 0;
rl.on("line", function (line) {
  count++;
  if (count === 1) {
    line.split("").map((item) => inputA.push(item));
  }
  if (count === 2) {
    line.split("").map((item) => {
      inputB.push(item);

      if (anagrams.get(item)) {
        const num = anagrams.get(item);
        anagrams.set(item, num + 1);
      } else {
        anagrams.set(item, 1);
      }
    });

    rl.close();
  }
}).on("close", function () {
  let start = 0;

  while (start < inputA.length) {
    let charLengths = 0;
    anagramsCopied = new Map(anagrams);

    for (let index = start; index < inputA.length; index++) {
      const elem = inputA[index];
      charLengths++;

      // inputB 길이 만큼만 체크해야 한다.
      if (charLengths > inputB.length) {
        break;
      }

      // inputB에 없는 문자열이면 아예 체크를 안 한다.
      if (!inputB.includes(elem)) {
        break;
      }

      // inputB에 있으면 해당 키 값을 찾은 다음 밸류에 -1을 해준다.
      // 아나그램이면 모든 포문이 돈 후의 밸류가 0이어야 한다.
      if (anagramsCopied.get(elem)) {
        const numB = anagramsCopied.get(elem);
        anagramsCopied.set(elem, numB - 1);
      }

      // 반복문의 마지막일 때, 알파벳별 갯수가 맞는지(아나그램인지) 확인한다.
      if (index === start + inputB.length - 1) {
        //   숫자가 0인 알파벳이 하나라도 없다면, 모두 동일한 갯수의 알파벳을 가졌다는 뜻이므로 정답을 ++해준다.
        if (![...anagramsCopied.values()].find((item) => item !== 0)) answer++;
      }
    }
    start++;
  }

  console.log({ answer });

  process.exit();
});
