// Map쓰는 문제
// 길이는 무조건 같음
// -> 각 요소가 /2 해서 다 나눠 떨어져야 함 -> ㄴㄴ
// a:[{inputA: 1}, {inputB: 2}]
// A:[{inputA: 1}, {inputB: 2}] 이런식으로 값 가지고 있기

// 우선 위 방식으로 하는데,
// 더 나은 방식 없는지 체크하기..
// 위 방식으로 하면 반복문을 한 번 더 돌아야 함
// ->
// inputA에 들어있으면 ++
// inputB에 들어있으면 --해서
// 마지막 loop돌 때 0이 아닌 애들이 있는지 체크!!!!

const verifyAnagram = (inputA, inputB) => {
  const anagrams = new Map();
  let answer = "YES";
  for (let idx = 0; idx < inputA.length; idx++) {
    const itemA = inputA[idx];
    const itemB = inputB[idx];
    if (!inputB.includes(itemA) || !inputA.includes(itemB)) {
      answer = "NO";
      return answer;
    }

    // if (itemA === itemB) {
    // console.log({ itemA });
    // console.log({ itemB });
    // }
    if (anagrams.get(itemA)) {
      // let result = 0;
      // inputA
      // ++

      const num = anagrams.get(itemA);
      anagrams.set(itemA, num + 1);
    } else {
      anagrams.set(itemA, 1);
    }

    // inputB
    // --
    if (anagrams.get(itemB)) {
      const numB = anagrams.get(itemB);
      anagrams.set(itemB, numB - 1);
    } else {
      anagrams.set(itemB, -1);
    }

    // check
    if (idx === inputA.length - 1) {
      // console.log(anagrams);
      // console.log(anagrams.values());
      if ([...anagrams.values()].find((item) => item !== 0)) {
        answer = "NO";
        return answer;
      }
    }
  }

  return answer;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputA = [],
  inputB = [];
let count = 0;
rl.on("line", function (line) {
  count++;
  if (count === 1) {
    line.split("").map((item) => inputA.push(item));
  }
  if (count === 2) {
    line.split("").map((item) => inputB.push(item));
    rl.close();
  }
}).on("close", function () {
  const result = verifyAnagram(inputA, inputB);
  console.log({ result });
  process.exit();
});
