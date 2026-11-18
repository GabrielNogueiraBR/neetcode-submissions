class Solution {
    /**
     * 
     * return the K most frequent elements
     * return the two most frequent elements
     * 
     * [1,2,2,3,3,3,4] => {1:1, 2:2, 3:3, 4:1} => [2,3,1,4] => [2,3]
     *
     * Time Complexity: O(n + nlogn) => O(nlogn)
     * 
     * 
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const mapCounter = new Map<number,number>()

        for(const num of nums){
            const previousValue = mapCounter.get(num) ?? 0
            mapCounter.set(num, previousValue + 1)
        }

        const entriesArray = Array.from(mapCounter.entries())
        const sortedArray = entriesArray.sort(([numA,countA],[numB, countB]) => countB - countA)
        const resultArray = sortedArray.map(([num]) => num).slice(0,k)
        
        return resultArray
    }
}
