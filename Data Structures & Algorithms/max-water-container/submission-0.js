class Solution {
    /**
     * 
     * 5                _        
     * 4    _                    
     * 3                        
     * 2        _                
     * 1            _            
     * 0                        
     *      0   1   2   3   4   5
     * 
     * 
     * Two Pointers
     *  - one at start
     *  - one at the end
     * 
     * 
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let L = 0
        let R = heights.length - 1
        let maxAmount = 0

        while(L < R){
            const height = Math.min(heights[L], heights[R])
            const currentAmount = height * (R - L)
            maxAmount = Math.max(maxAmount, currentAmount)

            if( heights[L] > heights[R]){
                R--
            } else {
                L++
            }
        }


        return maxAmount
    }
}
