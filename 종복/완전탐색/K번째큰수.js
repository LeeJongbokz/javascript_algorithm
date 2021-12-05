function solution(n, k, card){

    let check = new Array(200).fill(false);

    card.sort(function(a,b){
        return b-a;
    });

    console.log(card);

    for(let i=0; i<card.length; i++){
        if(check[card[i]] === false){
            check[card[i]] = true;
        }else{
            continue;
        }
    }

    let cnt = 0; 

    for(let i=100; i>=1; i--){
        if(check[i] === true){
            cnt += 1;
        }
        if(cnt === k){
            answer = i;
            break;
        }
    }

    return answer;

}



let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
