// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.

const findIndexces = (str, char) =>
  str.split("").reduce((idxs, letter, index) => {
    letter === char && idxs.push(index);
    return idxs;
  }, []);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input,
  letter = "",
  idxs;
const answer = [];
rl.on("line", function (line) {
  input = line.split(" ")[0];
  letter = line.split(" ")[1];
  idxs = findIndexces(input, letter);
  rl.close();
}).on("close", function () {
  //   console.log({ input });
  //   console.log({ letter });
  //   console.log({ idxs });

  [...input].forEach((element, index) => {
    let small = Number.MAX_SAFE_INTEGER; // 100도 괜춘
    idxs.forEach((elem) => {
      if (Math.abs(elem - index) < small) {
        small = Math.abs(elem - index);
      }
    });
    answer.push(small);
  });

  //   console.log({ answer });
  console.log(answer.join(" "));
  process.exit();
});
