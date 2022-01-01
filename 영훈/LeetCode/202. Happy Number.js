/**
 * @param {number} n
 * @return {boolean}
 */

const getNext = (n) => {
  let sum = 0;
  while (n > 0) {
      let d = n % 10;
      n = Math.floor(n / 10);
      sum += d * d;
  }
  return sum;
}

var isHappy = function(n) {
  // 2 4 16 37 58 89 145 42 20 4
  let arr = [];
  
  while (n !== 1 && !arr.find(el => el === n)) {
      arr.push(n);
      n = getNext(n);
  }
  
  return n === 1 ? true : false;
};