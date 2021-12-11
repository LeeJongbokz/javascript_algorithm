var arrayPairSum = function(nums) {

    // 오름차순 정렬
    nums.sort((a,b) => a - b);

    let sum = 0;

    // 1 2 2 5 6 6
    // 모든 조합을 고려할 필요 없이, 작은 수랑 큰 수 묶으면 큰 수를 못 쓰니까 정렬해서 순서대로 2개씩 묶는게 효율적
    // 2개씩 묶는다고 할 때, 앞에 있는 거 더하면 됨
    for (let i=0; i <nums.length; i+=2){
        sum += nums[i]
    }

return sum;
};


// 다른 풀이
// nums.sort((a, b) => a - b))
// nums.reduce((sum, cur, i) => (i % 2 === 0) ? sum += cur : sum, 0));