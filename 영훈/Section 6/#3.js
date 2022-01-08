function solution(board, moves){
  let answer = 0;
  let stack = [];

  for (let x of moves) {
    for (let i = 0; i < board.length; i++) {
      let point = board[i][x - 1];
      if (point) {
        stack.push(point);
        board[i][x - 1] = 0;
        break;
      }
    }
    if (stack.length > 1 && stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
      answer += 2;
    }
  }
  
  return answer;
}

let a=[[0,0,0,0,0],
     [0,0,1,0,3],
     [0,2,5,0,1],
     [4,2,4,4,2],
     [3,5,1,3,1]];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));