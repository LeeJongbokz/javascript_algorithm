// 171. Excel Sheet Column Number
// https://leetcode.com/problems/excel-sheet-column-number/

// 25씩 더해줌

// const columnTitle = "A";
// const columnTitle = "AB";
// const columnTitle = "FXSHRXW";
// const columnTitle = "ZY";
// const columnTitle = "ZZ";
const columnTitle = "AAA";

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  columnTitle = columnTitle.toLowerCase();

  const alpa = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  if (columnTitle.length === 1) return alpa.indexOf(columnTitle) + 1;

  columnTitle = [...columnTitle];
  let answer = 0;
  let i = 0;

  while (columnTitle.length) {
    // console.log({ answer });
    // console.log({ i });
    const elem = columnTitle.pop();

    if (i === 0) {
      answer += alpa.indexOf(elem) + 1;
    } else {
      answer += (alpa.indexOf(elem) + 1) * Math.pow(26, i);
    }
    i++;
  }

  return answer;
};

console.log(titleToNumber(columnTitle));
