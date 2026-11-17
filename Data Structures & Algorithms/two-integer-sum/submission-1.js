class Solution {
    /**
     * 
     * num[i] + num[j] == target
     * 
     * O(n^2)
     * 
     * target = 9
     * 
     * 1 2 6 4 8 5
     *           ^
     *       ^
     * 
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numMap = new Map();

        for(let i = 0; i < nums.length; i++){
            const num = nums[i];
            if(!numMap.has(num)) numMap.set(num, i)
        }

       for(let i = 0; i < nums.length; i++){
            const num = nums[i]

            const remain =  target - num
            const remainIndex = numMap.get(remain)

            if(remainIndex != undefined && remainIndex != i) {
                if(i > remainIndex){
                    return [remainIndex, i]
                } else {
                    return [i, remainIndex]
                }
            }
        }
        

        return []
    }
}
