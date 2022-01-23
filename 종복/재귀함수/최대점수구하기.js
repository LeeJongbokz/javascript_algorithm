function solution(m, ps, pt){         
    let answer=Number.MIN_SAFE_INTEGER;
    let n=ps.length;

    
    function DFS(index, sum, time){

        if(time > m){
            return; 
        }
        answer = Math.max(answer, sum);             

        for(let i=index; i<=n; i++){
            sum += ps[i-1];
            time += pt[i-1];
            DFS(index+1, sum, time);
            sum -= ps[i-1];
            time -= pt[i-1];
        }


    }

    DFS(1, 0, 0);

    return answer;
}

let ps=[10, 25, 15, 6, 7];
let pt=[5, 12, 8, 3, 4]
console.log(solution(20, ps, pt));
