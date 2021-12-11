var mostCommonWord = function(paragraph, banned) {
  let answer;
  let changedParagraph = '';
  let paragraphArray = [];
  let obj = {};
  let max = 0;

  changedParagraph = paragraph.toLowerCase().replace(/[^\w]/g, ' ');
  changedParagraph = changedParagraph.replace(/\s{2,}/gi, ' ');

  paragraphArray = changedParagraph.split(' ');

  console.log(paragraphArray);

  banned.forEach((ban) => {
    paragraphArray = paragraphArray.filter((el) => el !== ban);
  })

  paragraphArray.forEach((el) => {
    obj[el] = (obj[el] || 0) + 1;
    // if (obj[el]) {
    //   obj[el] = obj[el] + 1;
    // } else {
    //   obj[el] = 0 + 1;
    // }
  })

  for (let key in obj) {
    if (obj[key] > max) {
      answer = key;
      max = obj[key];
    }
  }

  return answer;
};

// let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
// let banned = ["hit"];
let paragraph = "Bob. hIt, baLl";
let banned = ["bob", "hit"];
console.log(mostCommonWord(paragraph, banned));