/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
 var canConstruct = function(s, k) {
  // map에 value가 홀수 몇개, 짝수 몇개 체크
  // 4 4 -> 1 1 1 1 -> 4개, 0개
  //     -> 2 2 -> 0개, 2개
  //     -> 4 -> 0개, 1개
  // leetcode
  // l: 1, e: 3, t: 1, c: 1, o: 1, d: 1
  // leetllle
  // l: 4, e: 3, t: 1
  // llleeeta
  // l: 3, e: 3, t: 1, a: 1
  // lllleeeta
  // l: 4, e: 3, t: 1, a: 1
  // 홀수인 문자 수가 k보다 크면 false

  if (s.length < k) return false;
  
  const map = new Map();
  let oddSum = 0;
  
  for (let x of s) {
      if (!map.has(x)) map.set(x, 1);
      else map.set(x, map.get(x) + 1);
  }
  
  for ([key, val] of map) {
      if (val % 2 !== 0) oddSum++;
  }
  
  if (oddSum > k) return false;
  return true;
};