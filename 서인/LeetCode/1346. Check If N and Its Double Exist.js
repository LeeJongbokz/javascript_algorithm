/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
    let zeroIdx = arr.indexOf(0)
    let lastZero = arr.lastIndexOf(0)
    if (arr[zeroIdx] === 0 && arr[lastZero] === 0 && zeroIdx !== lastZero) return true

    for (let x of arr){
        let tmp = x * 2;
        if (Object.keys(arr).find(key => arr[key] === tmp) && tmp !== 0) {
            return true;
        }
    }
    return false;
};