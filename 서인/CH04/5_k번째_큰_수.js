function solution(n, k, card) {
  let answer;
  card.sort((a, b) => b - a);
  console.log(card);

  let s = new Set();
  let m = card.length;
  for (let i = 0; i < m; i++) {
    for (let j = i + 1; j < m; j++) {
      for (let k = j + 1; k < m; k++) {
        s.add(card[i] + card[j] + card[k]);
      }
    }
  }

  let arr = Array.from(s);
  answer = arr[k - 1];

  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
