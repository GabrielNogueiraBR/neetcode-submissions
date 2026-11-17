class Solution {
    /**
     * 
     * Max difference => a1 - a2
     * a1 -> odd
     * a2 -> even
     * 
     * - find a1 with maximum freq.
     * - find a2 with minumum freq.
     * - get the max difference
     * 
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        const charCount = new Map()
        
        let oddMaxFreq = undefined
        let evenMinFreq = undefined

        for(const char of s){
            const count = charCount.get(char) || 0
            charCount.set(char, count + 1)
        }

        for(const [char, count] of charCount) {
            const isEven = count % 2 == 0

            if(isEven){
                evenMinFreq = Math.min(evenMinFreq ?? count, count)
            } else {
                oddMaxFreq = Math.max(oddMaxFreq ?? count, count)
            }
        }

        return oddMaxFreq - evenMinFreq
    }
}
