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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return []

        let rightSideArr = []
        let treeQueue = [root]

        while(treeQueue.length > 0){
            let rightNode = null
            let queueSize = treeQueue.length

            for(let i = 0; i < queueSize; i++){
                let node = treeQueue[i]

                rightNode = node

                if(node.left) treeQueue.push(node.left)
                if(node.right) treeQueue.push(node.right)
            }

            if(rightNode) rightSideArr.push(rightNode.val)
            treeQueue = treeQueue.slice(queueSize)
        }

        return rightSideArr       
    }
}
