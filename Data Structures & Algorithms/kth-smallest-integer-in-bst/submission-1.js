/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let index = k - 1
        let sortedArray = this.toSortedArray(root)

        return sortedArray[index]
    }

    toSortedArray(root){
        if(!root) return []

        const arr = []

        arr.push(...this.toSortedArray(root.left))
        arr.push(root.val)
        arr.push(...this.toSortedArray(root.right))

        return arr
    }


}
