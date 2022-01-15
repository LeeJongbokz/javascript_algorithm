function solution(target, arr){
    let answer;

    arr.sort(function(a,b){
        return a-b;
    });
  
    let lt = 0;
    let rt = arr.length-1;

    while(lt <= rt){
        let mid = Math.floor((lt+rt) / 2);

        if(arr[mid] < target){
            lt = mid+1;
        }else if(arr[mid] > target){
            rt = mid-1;
        }else if(arr[mid] === target){
            answer = mid;
            break;
        }
    }

    return answer;
}

let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
