class Solution {
    /**
     * 
     * input -> arr
     * output -> nested arrays
     * 
     * strings can be empty to 100 characters
     * 
     * 
     * act
     * pots
     * tops
     * cat
     * 
     * act -> [act]
     * opst -> [pots]
     * 
     * TimeComplexity: O(n*(m+mlogm)))
     * 
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagramMap = new Map<string,string[]>()

        // O(m + mlogm)
        function sortString(str: string): string{
            const arr: string[] = []

            for(let i = 0; i < str.length; i++){
                arr.push(str[i])
            }

            arr.sort((a,b) => a.localeCompare(b))
            
            return arr.toString()
        }

        // O(n)
        for(let i = 0; i < strs.length; i++){
            const str = strs[i]
            const key = sortString(str)
            
            const prev = anagramMap.get(key) ?? []
            anagramMap.set(key,[...prev, str])
        }

        const result = Array.from(anagramMap.values())

        return result
    }
}
