// https://leetcode.com/problems/reverse-linked-list/
// 206. Reverse Linked List

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
var reverseList = function (head) {
  let node = head;
  let prev = null; // null을 꼭 넣어야 함
  let next = null;

  while (node) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
};
// https://leetcode.com/problems/reverse-linked-list/discuss/1981361/Concise-JavaScript-solution-(O(n)-time-O(1)-space)
