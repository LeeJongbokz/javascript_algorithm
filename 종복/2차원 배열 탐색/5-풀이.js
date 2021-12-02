function solution(arr) {
    let answer = [];
    
    for(let i=0; i<arr.length; i++){
        answer.push(1);
    }


    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[i] < arr[j]){
                answer[i] += 1;
            }
        }
    }


    return answer;
  }
  
  let arr = [87, 89, 92, 100, 76];
  console.log(solution(arr));
