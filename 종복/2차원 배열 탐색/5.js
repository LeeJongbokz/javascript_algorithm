function solution(arr) {
  let answer = [];

  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i]);
  }

  temp.sort(function (a, b) {
    return b - a;
  });

  console.log(temp);

  let map = new Map();
  map.set(temp[0], 1);
  let rank = 1;

  for (let i = 1; i < temp.length; i++) {
    if (temp[i - 1] > temp[i]) {
      rank += 1;
      map.set(temp[i], rank);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let value = map.get(arr[i]);
    answer.push(value);
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
