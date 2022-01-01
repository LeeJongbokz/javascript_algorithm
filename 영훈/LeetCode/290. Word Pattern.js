/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
  s = s.split(' ');
  const pMap = new Map();
  const sMap = new Map();
  
  if (pattern.length !== s.length) return false;
  
  for (let i = 0; i < pattern.length; i++) {
      if (!pMap.has(pattern[i])) pMap.set(pattern[i], s[i]);
      else if (pMap.get(pattern[i]) !== s[i]) return false;
      if (!sMap.has(s[i])) sMap.set(s[i], pattern[i]);
      else if (sMap.get(s[i]) !== pattern[i]) return false;
  }
  
  return true;
};