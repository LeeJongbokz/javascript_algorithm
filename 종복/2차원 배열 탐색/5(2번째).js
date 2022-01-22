function solution(arr){  
                

    let answer = [];
    let n=arr.length;
    let map = new Map();
    let order = 1; 
    let original = arr.slice();

    arr.sort(function(a,b){
        return b-a;
    });

    for(let i=0; i<arr.length; i++){
        if(i === 0){
            map.set(arr[i], order);
        }else{
            if(arr[i-1] === arr[i]){
                continue;
            }else{
                order += 1;
                map.set(arr[i], order);
            }
        }
    }

    for(let i=0; i<original.length; i++){
        answer.push(map.get(original[i]));
    }
    
    return answer;

}


let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));
