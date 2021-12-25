// A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램을 작성하세요.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let countA = 0,
  countB = 0,
  inputA = [],
  inputB = [],
  answer = [];
rl.on("line", function (line) {
  if (inputA.length !== 0 && countB !== 0) {
    inputB = line.split(" ").map((item) => Number(item));
  }
  if (inputA.length !== 0 && countB === 0) countB = Number(line);
  if (countA !== 0 && countB === 0) {
    inputA = line.split(" ").map((item) => {
      return Number(item);
    });
  }

  if (countA === 0 && countB === 0) countA = Number(line);
  if (inputB.length !== 0) rl.close();



  
}).on("close", function () {
  // 짧은거 기준으로 돌아야 함
  const shortArr = inputA.length < inputB.length ? inputA : inputB;
  const longArr = inputA.length < inputB.length ? inputB : inputA;

  for (let idx = 0; idx < shortArr.length; idx++) {
    const item = shortArr[idx];

    // 짧은 배열에 안 들어가있으면 패스
    if (!longArr.includes(item)) continue;

    // 배열 맨 마지막 보다 크면 배열 맨 뒤로 넣음
    if (answer[answer.length - 1] < item) {
      answer.push(item);

      // 배열 맨 처음 보다 작으면 배열 맨 앞에 넣음
    } else if (answer[0] > item) {
      answer.unshift(item);

      // 배열에 아무 것도 없으면 배열에 그냥 넣음
    } else {
      if (answer.length === 0) {
        answer.push(item);
        continue;
      }

      // 위의 경우가 아니라면, 어디에 속해야 할지 위치를 찾아야 한다면
      // 일단 정답 중에 제일 큰 값은 아니므로 초기값을 정답 중에 제일 큰 값으로 만든다.
      let small = answer[answer.length - 1];
      let smallIdx = answer.length - 1;

      // 기존에 담은 정답배열을 돌면서 자신의 위치를 찾는다.
      // 제일 작지도 않으므로 인덱스 1까지만 돈다(0보다는 무조건 크다는 걸 알기 때문에).
      for (let index = answer.length - 2; index > 0; index--) {
        const element = answer[index];
        // console.log({ element });
        if (element < small) {
          // console.log("here: ", element);
          smallIdx = index;
          small = element;
        }
      }

      answer.splice(smallIdx + 1, 0, item);
    }
  }

  console.log({ answer });
  process.exit();
});
