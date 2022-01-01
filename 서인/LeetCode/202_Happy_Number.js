// 202 Happy Number

/**
 * @param {number} n
 * @return {boolean}
 */
 const isHappy = function(n) {
    const s = new Set()
    while (true) {
        const nums = []
        
        while (n > 0) {
            nums.push(n % 10)
            n = Math.floor(n / 10)
        }
        
        const sum = nums.reduce((sum, e) => sum + e**2, 0)

        if (sum === 1) return true
        if (s.has(sum)) return false
        
        s.add(sum)
        n = sum
    }
};