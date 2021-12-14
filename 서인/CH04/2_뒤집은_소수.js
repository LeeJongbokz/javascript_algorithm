// 뒤집은 소수
// 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면, 그 소수를 출력

function isPrime(num) {
  if (num === 1) return false;

  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(arr) {
  let answer = [];

  for (let x of arr) {
    let num = parseInt(x.toString().split("").reverse().join(""));
    if (isPrime(num)) {
      answer.push(num);
    }
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
