/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
  const map = new Map();
  for (let x of magazine) {
      if (!map.has(x)) map.set(x, 1);
      else map.set(x, map.get(x) + 1);
  }
  for (let x of ransomNote) {
      if (!map.has(x) || map.get(x) === 0) return false;
      else if (map.get(x)) map.set(x, map.get(x) - 1);
  }
  return true;
};