var groupAnagrams = function(strs) {
  const map = {};
    
  for (let str of strs) {
    const key = [...str].sort().join('');

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(str);
  }
    
  return Object.values(map);
};

let strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));