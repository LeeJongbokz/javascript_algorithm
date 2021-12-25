function solution(str1, str2){
  let answer = 'NO'; 
  let obj1 = {};
  let obj2 = {};
  let sortedObj1 = {};
  let sortedObj2 = {};

  for (let x of str1) {
    if (obj1[x]) obj1[x] += 1;
    else obj1[x] = 1;
  }

  for (let x of str2) {
    if (obj2[x]) obj2[x] += 1;
    else obj2[x] = 1;
  }

  Object.keys(obj1).sort().forEach((key) => {
    sortedObj1[key] = obj1[key];
  });
  Object.keys(obj2).sort().forEach((key) => {
    sortedObj2[key] = obj2[key];
  });

  if (JSON.stringify(sortedObj1) === JSON.stringify(sortedObj2)) answer = 'YES';

  return answer;
}

let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b));