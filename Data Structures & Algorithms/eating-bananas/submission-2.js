class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let maxValue = piles[0]

        for (let i = 0; i < piles.length; i++) {
            const currValue = piles[i]
            if (currValue > maxValue) maxValue = currValue
        }

        let min = 1
        let max = maxValue

        while(min < max) {
            let middle = Math.floor((min+max)/2)

            let sum = piles.map((n) => Math.ceil(n/middle)).reduce((acc,curr) => acc + curr,0)

            console.log(' - - - - ')
            console.log('min: ', min)
            console.log('middle: ', middle)
            console.log('max: ', max)
            console.log('sum: ', sum)
            
            if(sum <= h){
                max = middle
            } else {
                min = middle + 1
            }
        }

        return min
    }
}
