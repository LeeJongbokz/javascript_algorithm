// https://siyoon210.tistory.com/2
// 배열에 숫자 넣어가다가 연산자를 만나면 배열 pop pop한다음 그 연산자로 계산하고
// 결과를 다시 배열에 푸쉬
// 그 다음 계속 진행

// 352+*9-   //12
// 472+*     //36
// 52-34*+3/     //5

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];
const stack = [];

rl.on("line", function (line) {
  inputs = [...line];
  rl.close();
}).on("close", function () {
  inputs.forEach((item, idx) => {
    // 연산자일 경우
    const checkNum = Number(item);

    if (checkNum / 1 !== checkNum) {
      const num1 = stack.pop();
      const num2 = stack.pop();

      let result;
      switch (item) {
        case "-":
          result = num2 - num1;
          break;
        case "*":
          result = num2 * num1;
          break;
        case "/":
          result = num2 / num1;
          break;

        // +
        default:
          result = num2 + num1;
          break;
      }

      stack.push(result);
    } else {
      stack.push(Number(item));
    }
  });

  console.log({ stack });
  process.exit();
});
