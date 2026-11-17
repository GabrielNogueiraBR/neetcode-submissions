class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        const bit_number = 32

        function toBinaryArr(n) {
            let binaryArr = []
            let restN = n

            for (let i = bit_number - 1; i >= 0; i--) {
                const pos_number = Math.pow(2, i)
                let binary = 0

                if (pos_number <= restN) {
                    binary = 1
                    restN -= pos_number
                }

                binaryArr.push(binary)
            }

            return binaryArr
        }

        function reserverArrayInPlace(arr) {
            let left = 0
            let right = arr.length - 1

            while (left < right) {
                const temp = arr[left]
                arr[left] = arr[right]
                arr[right] = temp

                left++
                right--
            }

        }

        function fromBinaryArrToNumber(arr){
            let number = 0

            for(let i = bit_number - 1 ; i >= 0; i--){
                const pos_number = Math.pow(2, i)
                let binary = arr[(bit_number - 1) - i]

                if(binary == 1){
                    number += pos_number
                }
            }

            return number
        }

        const binaryArr = toBinaryArr(n)
        // console.log(binaryArr)

        reserverArrayInPlace(binaryArr)
        // console.log(binaryArr)
        
        return fromBinaryArrToNumber(binaryArr)
    }
}
