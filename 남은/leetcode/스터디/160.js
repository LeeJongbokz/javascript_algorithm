// 160. Intersection of Two Linked Lists
// https://leetcode.com/problems/intersection-of-two-linked-lists/

// 못 품!
// -> 답변: https://leetcode.com/problems/intersection-of-two-linked-lists/discuss/1825491/javascript-easy-understanding

//To understand this logic,
// i would suggest - take a pen and paper draw the example and traverse through the liked list in the example .
// once it reaches the end of nodeA,
// we are initializing nodeA to headB and once nodeB ends,
// we will initialize it to headA
// they will intersect then in the next loop,
// try out with pen and paper.

// 교차하는 경우 그 끝이 같음

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
  // 항상 이렇게 변수에 받더라...
  let nodeA = headA;
  let nodeB = headB;

  while (nodeA !== nodeB) {
    nodeA = nodeA.next;
    nodeB = nodeB.next;

    if (nodeA == nodeB) {
      return nodeA;
    }

    if (!nodeA) {
      nodeA = headB;
    }

    if (!nodeB) {
      nodeB = headA;
    }
  }
  return nodeA;
};
console.log(getIntersectionNode(headA, headB));
