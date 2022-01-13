function solution(arr){
    let answer = arr;
    for (let i = 0; i < arr.length; i++){
      let index = i;
      for (let j = i + 1; j < arr.length; j++){
        if (answer[j] < answer[index]) index = j;
      }
      [answer[i], answer[index]] = [answer[index], answer[i]];
    }
    return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));