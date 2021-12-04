// 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우
// 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오.
// 단 반복횟수가 1인 경우 생략합니다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input,
  answer = "";
const result = new Map();

rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  [...input].forEach((element) => {
    if (result.has(element)) {
      let count = result.get(element);
      result.set(element, count + 1);
    } else {
      result.set(element, 1);
    }
  });

  //
  for (const [key, value] of result) {
    if (value === 1) {
      answer += key;
    } else {
      answer += `${key}${value}`;
    }
  }

  console.log({ answer });
  process.exit();
});
