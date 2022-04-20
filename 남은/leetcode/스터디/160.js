// 160. Intersection of Two Linked Lists
// https://leetcode.com/problems/intersection-of-two-linked-lists/

// 교차하는 경우 그 끝이 같음

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 두 리스트의 길이 차이만큼 스타트 라인을 바꿔서 돌리기

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
  let aCount = 0,
    bCount = 0;
  let tailA, tailB;

  function checkIntersect(nodeA, nodeB) {
    while (nodeA !== nodeB) {
      if (nodeA == nodeB) return nodeA;
      nodeA = nodeA?.next ?? null;
      nodeB = nodeB?.next ?? null;
    }

    return nodeA;
  }

  while (nodeA.next) {
    nodeA = nodeA.next;
    aCount++;
  }
  tailA = nodeA;
  while (nodeB.next) {
    bCount++;
    nodeB = nodeB.next;
  }
  tailB = nodeB;

  if (tailA !== tailB) return null;

  nodeA = headA;
  nodeB = headB;
  const diff = aCount - bCount;
  // console.log({ diff });
  if (diff < 0) {
    // headeB is longer
    for (let idx = 0; idx < diff * -1; idx++) {
      nodeB = nodeB.next;
    }
  } else {
    // headeA is longer
    for (let idx = 0; idx < diff; idx++) {
      nodeA = nodeA.next;
    }
  }

  const result = checkIntersect(nodeA, nodeB);
  return result;
};

console.log(getIntersectionNode(headA, headB));
