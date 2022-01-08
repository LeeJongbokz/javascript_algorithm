const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// let answer = "YES";
let standard = [];
let inputs = [];
rl.on("line", function (line) {
  if (standard.length !== 0) inputs = [...line];
  if (inputs.length === 0) standard = [...line];
  if (inputs.length !== 0 && standard.length !== 0) rl.close();
}).on("close", function () {
  // inputs.forEach((item, idx) => {
  for (let item of inputs) {
    if (standard.includes(item)) {
      const str = standard.shift();
      if (str !== item) {
        console.log("NO");
        return;
      }
    }
  }

  console.log("YES");
  process.exit();
});
