// https://programmers.co.kr/learn/courses/30/lessons/43165

const numbers = [1, 1, 1, 1, 1],
  target = 3;

function solution(numbers, target) {
  var answer = 0;

  function DFS(idx, sum) {
    if (idx === numbers.length) {
      if (sum === target) {
        // if (sum === target && idx === numbers.length) {
        answer += 1;
      }
    } else {
      //   console.log({ idx });
      DFS(idx + 1, sum + numbers[idx]);
      DFS(idx + 1, sum - numbers[idx]);
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(solution(numbers, target));

//////////////////////
// let cnt = 0;

// function DFS(index, sum, len, numbers, target) {
//   if (index === len && sum === target) {
//     cnt += 1;
//   } else {
//     DFS(index + 1, sum + numbers[index], len, numbers, target);
//     DFS(index + 1, sum - numbers[index], len, numbers, target);
//   }
// }

// function solution(numbers, target) {
//   var answer = 0;
//   let len = numbers.length;

//   DFS(0, 0, len, numbers, target);

//   answer = cnt;
//   return answer;
// }
