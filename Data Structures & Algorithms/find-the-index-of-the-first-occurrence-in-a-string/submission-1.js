class Solution {
    /**
     * 
     * ncodneneetcodenneetcode
     *  ^
     * neet
     * ^
     * 
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    strStr(haystack, needle) {
        let hIndex = 0
        let nIndex = 0
        let firstOccurrence = -1
        
        while(hIndex < haystack.length && nIndex < needle.length){
            let charH = haystack[hIndex]
            let charN = needle[nIndex]

            if(firstOccurrence == -1){
                if(charH == charN){
                    firstOccurrence = hIndex
                    nIndex++
                }
                hIndex++
            } else {
                if(charH == charN){
                    nIndex++
                    hIndex++
                } else {
                    nIndex = 0
                    hIndex = firstOccurrence + 1
                    firstOccurrence = -1
                }
            }
        }

        if(nIndex != needle.length) return -1

        return firstOccurrence
    }
}
