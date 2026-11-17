class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const duplicateSet = new Set()

        for(let i = 0; i < nums.length; i++){
            const num = nums[i]

            if(duplicateSet.has(num))
                return true

            duplicateSet.add(num)
        }

        return false
    }
}
