/**
 * Notes:
 *  - buy in one the, then we can sell it in other day
 *  - to make profit, we need to buy in day ith and sell it in day (i+x)th
 * 
 * [10,1,5,6,7,1]
 * 
 * 

 * sell: 7
 * profit: 6
 * 
 * 
 * [2,3,1,7,6,5,1,10]
 *              ^
 * 
 *  Solution:
 *      - iterate in the array on reverse order
 *      - check for every iteration the max profit:
 *          - check the profit if we buy in that day:
 *              if it is greather than our current value: update the max profit
 *          - check the sell price in that day:
 *              if it is greather than our current sell price: update the sell price
 *          - check the profit if we buy and sell in that day:
 *              if it is greather than or equals: update the buy and sell and profit
 *      - return max profit
 */

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let sellPrice = prices[prices.length - 1]
        let maxProfit = 0

        for(let i = prices.length - 2; i >= 0; i--){
            const priceDay = prices[i]

            if(priceDay > sellPrice){
                sellPrice = priceDay
            }

            const profit = sellPrice - priceDay

            if(profit > maxProfit) {
                maxProfit = profit
            }
        }

        return maxProfit
    }
}
