
/**
 * Notes:
 *  - worst solution: O(n^2)
 *      - iterate in the array
 *      - for each iteration:
 *          - iterate in the array
 *          - calcule the product excepting the self
 * 
 * Input:  [ 1, 2, 4, 6]
 * Output: [48, 24, 12, 8]
 * 
 * [ 1, 2, 4, 6]
 *      ^
 * 
 * 1: [2, 4, 6]
 * 2: [4, 6, 1]
 * 4: [6, 1, 2]
 * 6: [1, 2, 4]
 * 
 * 1: 
 * 2:
 * 4:
 * 6:
 * 
 * 
 * Input:  [ 1, 2, 4, 6]
 * 
 * prefix:  [ 0, 0, 0, 0]
 * postfix: [ 0, 0, 0, 0]
 * 
 * 
 * Input:  [ 1, 2, 4, 6]
 *                    ^
 * 
 * Output: [ 48, 24, 12, 8]
 */


class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const size = nums.length

        const prefix = new Array(size).fill(1)
        const postfix = new Array(size).fill(1)

        const response = new Array(size).fill(0)

        prefix[0] = 1
        postfix[size - 1] = 1

        for(let i = 1; i < size; i++){
            prefix[i] = prefix[i-1] * nums[i-1]
        }

        for(let i= size -2; i >=0; i--){
            postfix[i] = postfix[i+1] * nums[i+1]
        }

        for(let i = 0; i < size; i++){
            response[i] = prefix[i] * postfix[i]
        }


        return response
    }
}
