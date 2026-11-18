class Solution {
    /**
     * 
     * 
     * wasitacaroracatisaw
     * 
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // remove non-alphanumeric characters
        function normalizeString(s: string): string {
            return s.replaceAll(/[^(a-z|A-Z|0-9)]/g, "").toLowerCase()
        }

        const str = normalizeString(s)

        console.log("str: ", str)

        // check if its a palindrome
        for(let i = 0, j = str.length - 1; i < str.length && j >= i; i++, j--){
            const charA = str[i]
            const charB = str[j]

            if(charA == charB) continue
            return false
        }

        return true
    }
}
