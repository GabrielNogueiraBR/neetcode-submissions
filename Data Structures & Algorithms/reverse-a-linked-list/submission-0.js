/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if(head != null){
            let newHead = this.reverseList(head.next);
            
            if(newHead == null){
                return head
            }

            head.next.next = head
            head.next = null
            

            return newHead
        }
        
        return head
    }
}
