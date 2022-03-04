function solution(s, t){
  let answer = [];
  let array = []; // [1, 5, 10]

  // 0 1 0 0 0 5 0 0 0 0 10
  // 0 1 2 3 4 5 6 7 8 9 10

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) array.push(i);
  }

  for (let i = 0; i < s.length; i++) {
    let min = 101;
    if (s[i] === t) answer.push(0);
    else {
      for (let j = 0; j < array.length; j++) {
        let distance = Math.abs(i - array[j]);
        if (distance < min) min = distance;
      }
      answer.push(min);
    }
  }

  return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));