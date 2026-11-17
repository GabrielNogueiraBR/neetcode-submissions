class Solution {
    /**
     * 
     * Solution: 
     *  - dictionary of values
     *  - the order of symbols
     *  - are some rules of 4 and 9
     *  - left to rigth
     * 
     * @param {string} s
     * @return {number}
     */
    romanToInt(s) {
        const dictionary = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }

        let number = 0

        for(let i = 0; i < s.length; i++){
            let char = s[i]
            let currentValue = dictionary[char]

            if(i + 1 < s.length){
                let secondChar = s[i + 1]
                if(dictionary[secondChar] > dictionary[char]){
                    currentValue = dictionary[secondChar] - dictionary[char]
                    i++
                }
            }

            number += currentValue
        }

        console.log(number)

        return number
    }
}
