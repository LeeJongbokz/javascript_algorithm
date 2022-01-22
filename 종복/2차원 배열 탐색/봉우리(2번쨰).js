function solution(arr){  
    let answer=0;
    let n=arr.length;

    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1, 0];

    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            let nx;
            let ny;
            let check = true;

            for(let k=0; k<4; k++){
                nx = i+dx[k];
                ny = j+dy[k];
                if(0<=nx && nx<n && 0<=ny && ny<n && arr[nx][ny] > arr[i][j]){
                    check = false;
                    break;
                }
            }
            if(check){
                answer += 1;
            }
        }
    }

      
    return answer;
}

let arr=[[5, 3, 7, 2, 3], 
         [3, 7, 1, 6, 1],
         [7, 2, 5, 3, 4],
         [4, 3, 6, 4, 1],
         [8, 7, 3, 5, 2]];
console.log(solution(arr));
