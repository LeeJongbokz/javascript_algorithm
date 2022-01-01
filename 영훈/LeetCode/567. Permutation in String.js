/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

function compareMaps (map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
      if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

var checkInclusion = function(s1, s2) {
  const s1Map = new Map();
  const s2Map = new Map();
  let left = 0;
  let right = s1.length - 1;
  
  if (s1.legnth > s2.length) return false;
  
  for (let i = 0; i < s1.length; i++) {
      if (!s1Map.has(s1[i])) s1Map.set(s1[i], 1);
      else s1Map.set(s1[i], s1Map.get(s1[i]) + 1);
      if (!s2Map.has(s2[i])) s2Map.set(s2[i], 1);
      else s2Map.set(s2[i], s2Map.get(s2[i]) + 1);
  }
  
  while (right < s2.length) {
      if (compareMaps(s1Map, s2Map)) return true;
      const leftStrNum = s2Map.get(s2[left]);
      if (leftStrNum > 1) s2Map.set(s2[left], leftStrNum - 1)
      else s2Map.delete(s2[left]);
      left++;
      right++;
      s2Map.set(s2[right], s2Map.has(s2[right]) ? s2Map.get(s2[right]) + 1 : 1);
  }
  
  return false;
};