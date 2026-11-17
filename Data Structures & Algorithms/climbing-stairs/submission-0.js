class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

        // F(1) = 1
        // F(2) = 2
        // F(3) = 3
        // F(4) = 5

        // 1) 1 + 1 + 1 + 1
        // 2) 1 + 1 + 2
        // 3) 1 + 2 + 1
        // 4) 2 + 1 + 1
        // 5) 2 + 2

        if (n <= 2) {
            return n
        }

        return this.climbStairs(n - 1) + this.climbStairs(n - 2)
    }
}
