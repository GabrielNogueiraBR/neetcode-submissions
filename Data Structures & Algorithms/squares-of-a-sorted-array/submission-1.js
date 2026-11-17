/**
 * 
 * Notes:
 *  - negative, positive and zeros
 *  - square and return sorted array
 *  - input array is alread sorted
 * 
 * 
 * -2 -1 0 3 4
 *    <- | ->
 * 
 *  positive: [0, 9, 16]
 *  negative: [4, 1]
 * 
 * [0, 9, 16]
 *  ^
 * 
 * [4, 1]
 *     ^
 * 
 * [0, 1, 4, 9, 16]
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let positiveSquareArr = []
        let negativeSquareArr = []

        let squareSortedArr = new Array(nums.length).fill(0)

        for(let i = 0; i < nums.length; i++){
            const num = nums[i]

            if(num < 0) negativeSquareArr.push(num*num)
            else positiveSquareArr.push(num*num)
        }

        let squareSortedIndex = 0
        let positiveIndex = 0
        let negativeIndex = negativeSquareArr.length - 1


        while(negativeIndex >= 0){
            let squareNegative = negativeSquareArr[negativeIndex]
            
            if(positiveIndex < positiveSquareArr.length){
                let squarePositive = positiveSquareArr[positiveIndex]

                if(squarePositive > squareNegative){
                    squareSortedArr[squareSortedIndex] = squareNegative
                    squareSortedIndex++
                    negativeIndex--
                } else {
                    squareSortedArr[squareSortedIndex] = squarePositive
                    squareSortedIndex++
                    positiveIndex++
                }
            } else {
                squareSortedArr[squareSortedIndex] = squareNegative
                squareSortedIndex++
                negativeIndex--
            }
        }

        while(positiveIndex < positiveSquareArr.length){
            const squarePositive = positiveSquareArr[positiveIndex]
            squareSortedArr[squareSortedIndex] = squarePositive

            squareSortedIndex++
            positiveIndex++
        }

        return squareSortedArr
    }
}
