function solution(m, arr){
    let answer=[];

    let left = 0;
    let right = 1;
    let sum = arr[0]; 

    while(1){
        if(sum === m){
            answer.push(arr.slice(left, right));
            sum += arr[right];
            right += 1;
        }else if(sum < m){
            if(right === arr.length){
                break;
            }
            sum += arr[right];
            right += 1;
        }else if(sum > m){
            sum -= arr[left];
            left += 1;
        }

    }

    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
