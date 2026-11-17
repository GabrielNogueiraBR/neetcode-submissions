class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const charSet = new Set()
        const sMap = new Map()
        const tMap = new Map()

        for(let i = 0; i < s.length; i++){
            const char = s[i]
            const freq = (sMap.get(char) || 0) + 1
            sMap.set(char, freq)
            charSet.add(char)
        }

        for(let i = 0; i < t.length; i++){
            const char = t[i]
            const freq = (tMap.get(char) || 0) + 1
            tMap.set(char, freq)
            charSet.add(char)
        }


        for(const char of charSet){
            const sFreq = sMap.get(char)
            const tFreq = tMap.get(char)
            if(sFreq != tFreq) return false
        }

        console.log(sMap, tMap)

        return true
    }
}
