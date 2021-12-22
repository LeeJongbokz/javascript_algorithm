function solution(s, t){
  let answer = 0;
  let len = t.length;
  let str = '';
  let obj1 = {}, obj2 = {};
  let sortedObj1 = {}, sortedObj2 = {};

  const compareObj = (str) => {
    obj1 = {};
    sortedObj1 = {};
    for (let x of str) {
      if (obj1[x]) obj1[x] += 1;
      else obj1[x] = 1;
    }
    Object.keys(obj1).sort().forEach((key) => {
      sortedObj1[key] = obj1[key];
    })
    if (JSON.stringify(sortedObj1) === JSON.stringify(sortedObj2)) answer++;
  }

  for (let x of t) {
    if (obj2[x]) obj2[x] += 1;
    else obj2[x] = 1;
  }

  Object.keys(obj2).sort().forEach((key) => {
    sortedObj2[key] = obj2[key];
  })

  for (let i = 0; i < s.length - len + 1; i++) {
    str = s.substring(i, i + len);
    compareObj(str);
  }

  return answer;
}

let a="bacaAacba";
let b="abc";
console.log(solution(a, b));