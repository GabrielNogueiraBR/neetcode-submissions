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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if(preorder.length == 0 || inorder.length == 0) return null

        // [1,2,3,4]
        // [2,1,3,4]

        const root = new TreeNode(preorder[0])
        const indexRoot = inorder.findIndex((value) => value == root.val)
        
        root.left = this.buildTree(preorder.slice(1, indexRoot + 1), inorder.slice(0, indexRoot))
        root.right = this.buildTree(preorder.slice(indexRoot + 1), inorder.slice(indexRoot + 1))

        return root

    }
}
