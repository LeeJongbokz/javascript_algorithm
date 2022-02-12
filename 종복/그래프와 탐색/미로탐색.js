function solution(board){  
    let answer=0;

    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];

    let visited = new Array(7).fill(false);
    for(let i=0; i<7; i++){
        visited[i] = new Array(7).fill(false);
    }

    function isInside(x, y){
        if(0<=x && x<=6 && 0<=y && y<=6){
            return true;
        }else{
            return false;
        }
    }

    function DFS(x,y){
        if(x === 6 && y === 6){
            answer += 1;
            return; 
        }

        for(let i=0; i<4; i++){
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(isInside(nx, ny) && board[nx][ny] === 0 && visited[nx][ny] === false){
                visited[nx][ny] = true;
                DFS(nx, ny);
                visited[nx][ny] = false;
            }
        }

    }

    visited[0][0] = true;
    DFS(0, 0);

    return answer;

}

let arr=[[0, 0, 0, 0, 0, 0, 0], 
         [0, 1, 1, 1, 1, 1, 0],
         [0, 0, 0, 1, 0, 0, 0],
         [1, 1, 0, 1, 0, 1, 1],
         [1, 1, 0, 0, 0, 0, 1],
         [1, 1, 0, 1, 1, 0, 0],
         [1, 0, 0, 0, 0, 0, 0]];

console.log(solution(arr));
