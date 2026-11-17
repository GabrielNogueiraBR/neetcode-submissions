class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        
        let result = []

        /**
         * @param {number} i
         * @param {number[]} curr
         * @param {number} total
         */
        function dfs(i,curr,total){
            if(total == target){
                result.push(curr.map((e) => e))
                return
            }

            if(i >= nums.length || total > target){
                return
            }

            const num = nums[i]
            
            curr.push(num)
            dfs(i,curr,total+num)
            curr.pop()
            dfs(i+1,curr,total)
        }

        dfs(0,[],0)

        return result
    }
}
