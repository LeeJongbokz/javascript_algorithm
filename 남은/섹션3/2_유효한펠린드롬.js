// 앞에서 읽어도 뒤에서 읽어도 같은 문자인지 체크
// 단, 알파벳만 검사(나머지는 다 무시)

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input,
  inputReplaced = "",
  answer = "YES";
rl.on("line", function (line) {
  input = line.toLowerCase();
  rl.close();
}).on("close", function () {
  [...input].forEach((element) => {
    if (element.match(/[a-zA-Z]+/g)) inputReplaced += element;
  });

  for (let index = 0; index < inputReplaced.length / 2; index++) {
    if (
      inputReplaced[index] !== inputReplaced[inputReplaced.length - index - 1]
    ) {
      answer = "NO";
      break;
    }
  }
  console.log({ answer });
  process.exit();
});
