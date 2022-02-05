// 15분
// 1sol

function solution(board, moves) {
    var answer = 0;

    let stack = [];

    for(let k=0; k<moves.length; k++){

        let pos = moves[k]-1;

        for(let i=0; i<board.length; i++){
            if(board[i][pos] === 0){
                continue;
            }else{
                let num = board[i][pos];

                if(stack.length ===  0){
                    stack.push(num);
                }else{
                    if(stack[stack.length-1] === num){
                        stack.pop();
                        answer += 2;
                    }else{
                        stack.push(num);
                    }
                }
                board[i][pos] = 0;
                break;
            }
        }

    }

    return answer;
}
