/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
  for (let x of s) {
      console.log(x);
      t = t.replace(x, '');
  }
  return t;
};