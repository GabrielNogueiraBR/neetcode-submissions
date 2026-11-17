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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let head = null
        let curr = null

        let head1 = list1
        let head2 = list2

        while (head1 != null || head2 != null) {
            if (head1 != null && head2 != null) {
                
                if (head1.val < head2.val) {
                    let next = head1.next

                    if (head == null) {
                        head = head1
                    } else {
                        curr.next = head1
                    }

                    curr = head1
                    curr.next = null

                    head1 = next
                }
                else {
                    let next = head2.next

                    if (head == null) {
                        head = head2
                    } else {
                        curr.next = head2
                    }

                    curr = head2
                    curr.next = null

                    head2 = next
                }
            }
            else if (head1 != null) {
                let next = head1.next

                if (head == null) {
                    head = head1
                } else {
                    curr.next = head1
                }

                curr = head1
                curr.next = null

                head1 = next
            } else if (head2 != null) {
                let next = head2.next

                if (head == null) {
                    head = head2
                } else {
                    curr.next = head2
                }

                curr = head2
                curr.next = null

                head2 = next
            }

        }

        return head;
    }
}
