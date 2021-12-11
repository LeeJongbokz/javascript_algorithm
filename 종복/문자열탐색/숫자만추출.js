function solution(str){
    
    let answer="";
    let numbers = "";
    
    for(let i=0; i<str.length; i++){
        let num = str[i].charCodeAt();

        if(48<= num && num <= 57){
            numbers += str[i];
        }
    }

    if(numbers[0] === '0'){
        numbers = numbers.substring(1);
    }

    answer = numbers;

    return answer;

}
            
let str="g0en2T0s8eSoft";
console.log(solution(str));
