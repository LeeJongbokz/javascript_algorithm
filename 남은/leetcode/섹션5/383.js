// 383. Ransom Note
// https://leetcode.com/problems/ransom-note/

// const ransomNote = "a",
//   magazine = "b";

// const ransomNote = "aa",
//   magazine = "ab";

// const ransomNote = "aa",
//   magazine = "aab";
const ransomNote = "fihjjjjei",
  magazine = "hjibagacbhadfaefdjaeaebgi";

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const matchCheck = new Map();
  const notes = ransomNote.split("");
  const magazines = magazine.split("");

  // magazines에 들어있으면 ++
  // notes에 들어있으면 --해서
  // 마지막 loop돌 때 -1인 애들이 있는지 체크!!!!

  if (notes.length > magazines.length) return false;
  for (let idx = 0; idx < magazines.length; idx++) {
    const letter = magazines[idx];
    if (matchCheck.get(letter)) {
      const num = matchCheck.get(letter);
      matchCheck.set(letter, num + 1);
    } else {
      matchCheck.set(letter, 1);
    }

    if (idx < notes.length) {
      const letter = notes[idx];
      if (matchCheck.get(letter)) {
        const num = matchCheck.get(letter);
        matchCheck.set(letter, num - 1);
        if (idx === magazines.length - 1 && num - 1 === -1) {
          return false;
        }
      } else {
        matchCheck.set(letter, -1);
        if (idx === magazines.length - 1) return false;
      }
    }
  }

  if ([...matchCheck.values()].find((item) => item < 0)) {
    return false;
  }
  return true;
};

console.log(canConstruct(ransomNote, magazine));
