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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) {
            return []
        }

        let resultArr = []
        let treeQueue = [root]

        while (treeQueue.length > 0) {
            let levelArr = []
            let queueSize = treeQueue.length

            for (let i = 0; i < queueSize; i++) {
                let node = treeQueue[i]

                levelArr.push(node.val)

                if (node.left) treeQueue.push(node.left)
                if (node.right) treeQueue.push(node.right)
            }

            treeQueue = queueSize < treeQueue.length ? treeQueue.slice(queueSize) : []
            resultArr.push(levelArr)
        }

        return resultArr
    }
}
