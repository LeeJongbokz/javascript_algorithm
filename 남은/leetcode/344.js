const string = ["h", "e", "l", "l", "o"];

var reverseString = function (s) {
  const sLength = s.length;
  for (let index = 0; index < sLength; index++) {
    const idx = sLength - index - 1;
    const elem = s[sLength - index - 1];
    s.splice(idx, 1);
    s.push(elem);
    // console.log(s);
  }

  console.log(s);
};

reverseString(string);
