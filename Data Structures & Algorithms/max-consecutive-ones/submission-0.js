class Solution {
    /**
     * 
     * 
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxNumberOfOnes = 0
        let currentNumberOfOnes = 0

        for(let i = 0; i < nums.length; i++){
            const number = nums[i]

            if(number == 1){
                currentNumberOfOnes += 1
                maxNumberOfOnes = Math.max(currentNumberOfOnes, maxNumberOfOnes)
            } else {
                currentNumberOfOnes = 0
            }
        }


        return maxNumberOfOnes
    }
}
