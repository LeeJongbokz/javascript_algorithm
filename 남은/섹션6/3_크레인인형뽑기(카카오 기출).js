const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];

const solution = (board, moves) => {
  let answer = 0;
  const stack = [];

  moves.forEach((elem) => {
    for (let idx = 0; idx < board.length; idx++) {
      const item = board[idx];
      if (item[elem - 1] !== 0) {
        // item.splice(idx, 1, 0);
        const poped = stack.pop();
        // console.log({ poped });

        if (poped === item[elem - 1]) {
          answer += 2;
        } else {
          if (poped) stack.push(poped);
          stack.push(item[elem - 1]);
        }
        item[elem - 1] = 0;

        break;
      }
    }
  });
  // console.log({ stack });
  return answer;
};

console.log(solution(board, moves));
