function solution(arr){
    let answer=arr;

    arr.sort(function(a,b){
        if(a[0] < b[0]){
            return a[0]-b[0];
        }else if(a[0] === b[0]){
            if(a[1] < b[1]){
                return a[1]-b[1];
            }
        }
    });

    return answer;
}

let arr=[[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];
console.log(solution(arr));
