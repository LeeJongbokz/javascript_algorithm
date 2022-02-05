// https://programmers.co.kr/learn/courses/30/lessons/43162

const n = 3,
  computers = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ];

function solution(n, computers) {
  var answer = 0;

  function DFS(L, sum) {
    if (sum > c) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  return answer;
}

console.log(solution(n, computers));
