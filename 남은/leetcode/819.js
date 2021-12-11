// 819
// Map 쓰기
const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.",
  banned = ["hit"];
// const paragraph = "a.",
//   banned = [];
// const paragraph = "Bob!",
//   banned = ["hit"];
// const paragraph = "a, a, a, a, b,b,b,c, c",
//   banned = ["a"];

var mostCommonWord = function (paragraph, banned) {
  const answer = new Map();
  let lowerCaseArr = paragraph
    .toLowerCase()
    .split(" ")
    .map((item) => {
      if (item.includes(",")) {
        return item.split(",").length === 2
          ? item.split(",")[0]
          : item.split(",");
      }
      return item.replace(/[^a-zA-Z0-9]/g, "");
    });

  lowerCaseArr.map((item, idx) => {
    if (typeof item === "object") {
      lowerCaseArr.splice(idx, 1);
      item.map((test) => lowerCaseArr.push(test));
    }
  });

  let big = 0;
  let totalAnswer;
  lowerCaseArr.forEach((element) => {
    if (banned.includes(element)) return;

    if (answer.has(element)) {
      const count = answer.get(element);
      answer.set(element, count + 1);
      if (count + 1 > big) {
        big = count + 1;
        totalAnswer = element;
      }
    } else {
      answer.set(element, 1);
      if (big === 0) totalAnswer = element;
    }
  });

  return totalAnswer;
};

console.log(mostCommonWord(paragraph, banned));
