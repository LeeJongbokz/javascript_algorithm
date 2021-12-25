// Map쓰는 문제

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let count = 0;
rl.on("line", function (line) {
  count++;
  if (count !== 2) return;
  line.split("").map((item) => input.push(item));
  rl.close();
}).on("close", function () {
  const candidates = new Map();
  const answer = { student: "", count: 0 };
  input.forEach((item, idx) => {
    if (candidates.get(item)) {
      const num = candidates.get(item);
      candidates.set(item, num + 1);
      if (answer.count < num + 1) {
        answer.count = num + 1;
        answer.student = item;
      }
    } else {
      candidates.set(item, 1);
    }
  });

  //   console.log({ candidates });
  //   console.log({ answer });
  console.log(answer.student);

  process.exit();
});
