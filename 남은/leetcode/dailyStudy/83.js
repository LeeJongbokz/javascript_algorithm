// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return null;

  let prev = head;
  let cur = head.next;

  while (cur !== null) {
    if (prev.val === cur.val) {
      prev.next = cur.next;
    } else {
      prev = prev.next;
    }
    cur = cur.next;
  }

  return head;
};
