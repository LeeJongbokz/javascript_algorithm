function solution(arr){  
   

    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    let cnt = 0; 

    let len = arr.length;

    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            
            let isMount = true;

            for(let k=0; k<4; k++){
                let nx = i + dx[k];
                let ny = j + dy[k];
                if( (0<=nx && nx<= len-1) && (0<=ny && ny<=len-1) && (arr[nx][ny] > arr[i][j])){
                    isMount = false;
                    break;
                } 
            }
            if(isMount === true){
                cnt += 1;
            }
        }
    }

    return cnt;

}

let arr=[[5, 3, 7, 2, 3], 
         [3, 7, 1, 6, 1],
         [7, 2, 5, 3, 4],
         [4, 3, 6, 4, 1],
         [8, 7, 3, 5, 2]];
console.log(solution(arr));
