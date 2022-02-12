function solution(n, arr){  
    let answer=0;
    let visited = new Array(arr.length).fill(false);

    function DFS(current){

        if(current === 5){
            answer += 1;
            return; 
        }

        for(let i=0; i<arr.length; i++){
            if(arr[i][0] === current && visited[arr[i][1]] === false){
                visited[arr[i][1]] = true;
                DFS(arr[i][1]);
                visited[arr[i][1]] = false;
            }
        }

    }
    
    visited[1] = true;
    DFS(1);

    return answer;

}

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));
