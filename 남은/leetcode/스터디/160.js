// 160. Intersection of Two Linked Lists
// https://leetcode.com/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const intersectVal = 8,
  listA = [4, 1, 8, 4, 5],
  listB = [5, 6, 1, 8, 4, 5],
  skipA = 2,
  skipB = 3;

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let a = headA.val,
    b = headB.val;
  while (a !== b) {
    if (headA.next) a = headA.next;
    if (headB.next) b = headB.next;

    return a;
  }
};
console.log(getIntersectionNode(headA, headB));
