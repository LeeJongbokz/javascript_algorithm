function solution(meeting){
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  })
  let endTime = 0;
  let answer = 0;
  for (const x of meeting) {
    if (x[0] >= endTime) {
      endTime = x[1];
      answer++;
    }
  }
  return answer;
}

let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
console.log(solution(arr));