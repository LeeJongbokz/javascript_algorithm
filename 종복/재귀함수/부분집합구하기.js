function solution(n){

    let answers = [];

    function DFS(index, arr, n){

        if(index === n+1){
            let answer = "";
            for(let i=0; i<arr.length; i++){
                answer += String(arr[i]);
            }   
            answers.push(answer);
            return;
        }

        for(let i=index; i<=n; i++){
            arr.push(i);
            DFS(i+1, arr, n);
            arr.pop();
        }

        let answer = "";

        for(let i=0; i<arr.length; i++){
            answer += String(arr[i]);
        }
        if(answer !== ""){
            answers.push(answer);
        }
    }
    

    let arr = [];

    DFS(1, arr, n);

    return answers;
}

console.log(solution(3));
