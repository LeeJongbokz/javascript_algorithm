function solution(m, arr){
     
    let answer=0, right=0, sum=0;
                
    for(let left=0; left<arr.length; left++){
                 
       sum = 0;  
       sum+=arr[left];
       if(sum<=m) {
        answer++;
        right = left+1;
       }else{
        continue;
       }
                    
       while(sum<=m && right < arr.length){
          sum+=arr[right++];
          if(sum<=m) answer++;       
       }
    }        
    return answer;
}
            
let a=[1, 3,1,2,3];
console.log(solution(6, a));
