class Solution {
    /**
     * 
     * 
     * 10, 20, 20, 40, 0, 0
     *              ^
     *                    ^
     * 
     * 1, 2
     * ^
     * 
     * 
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let n1Index = m - 1
        let n2Index = n - 1

        let index = m + n - 1

        while (
            n1Index >= 0 ||
            n2Index >= 0 ||
            index >= 0
        ) {

            const num1 = n1Index >= 0 ? nums1[n1Index] : null
            const num2 = n2Index >= 0 ? nums2[n2Index] : null

            if (num1 != null && num2 != null) {
                if(num1 > num2){
                    nums1[index] = num1
                    n1Index--
                } else {
                    nums1[index] = num2
                    n2Index--
                }
            }
            else if (num2 != null) { 
                nums1[index] = num2
                n2Index--
            }
            else if (num1 != null) {
                nums1[index] = num1
                n1Index--
            }

            index--
        }
    }
}
