class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {

        const results = []

        /**
         * @param {number} i
         * @param {number[]} subset
         */
        function dfs(i, subset) {
            if (i >= nums.length) {
                results.push(subset.map(e => e))
                return
            }

            const currentNumber = nums[i]
            subset.push(currentNumber)

            dfs(i + 1, subset)

            subset.pop()
            dfs(i + 1, subset)
        }

        dfs(0,[])

        return results
    }
}
