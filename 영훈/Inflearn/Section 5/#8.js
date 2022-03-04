function compareMaps(map1, map2){
  if(map1.size!==map2.size) return false;
  for(let [key, val] of map1){
      if(!map2.has(key) || map2.get(key)!==val) return false;
  }
  return true;
}
function solution(s, t){
  let answer=0;
  let tH = new Map();
  let sH = new Map();
  for(let x of t){
      if(tH.has(x)) tH.set(x, tH.get(x)+1);
      else tH.set(x, 1);
  }
  let len=t.length-1;
  for(let i=0; i<len; i++){
      if(sH.has(s[i])) sH.set(s[i], sH.get(s[i])+1);
      else sH.set(s[i], 1);
  }
  let lt=0;
  for(let rt=len; rt<s.length; rt++){
      if(sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt])+1);
      else sH.set(s[rt], 1);
      if(compareMaps(sH, tH)) answer++;
      sH.set(s[lt], sH.get(s[lt])-1);
      if(sH.get(s[lt])===0) sH.delete(s[lt]);
      lt++;
  }
  return answer;
}

let a="bacaAacba";
let b="abc";
console.log(solution(a, b));

// function solution(s, t){
//   let answer = 0;
//   let len = t.length;
//   let str = '';
//   let obj1 = {}, obj2 = {};
//   let sortedObj1 = {}, sortedObj2 = {};

//   const compareObj = (str) => {
//     obj1 = {};
//     sortedObj1 = {};
//     for (let x of str) {
//       if (obj1[x]) obj1[x] += 1;
//       else obj1[x] = 1;
//     }
//     Object.keys(obj1).sort().forEach((key) => {
//       sortedObj1[key] = obj1[key];
//     })
//     if (JSON.stringify(sortedObj1) === JSON.stringify(sortedObj2)) answer++;
//   }

//   for (let x of t) {
//     if (obj2[x]) obj2[x] += 1;
//     else obj2[x] = 1;
//   }

//   Object.keys(obj2).sort().forEach((key) => {
//     sortedObj2[key] = obj2[key];
//   })

//   for (let i = 0; i < s.length - len + 1; i++) {
//     str = s.substring(i, i + len);
//     compareObj(str);
//   }

//   return answer;
// }

// let a="bacaAacba";
// let b="abc";
// console.log(solution(a, b));