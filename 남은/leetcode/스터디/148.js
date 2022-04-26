// https://leetcode.com/problems/sort-list/
// 148. Sort List

// 83번 문제 같은...

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
var sortList = function (head) {
  let start = Number.MAX_SAFE_INTEGER,
    end = Number.MIN_SAFE_INTEGER,
    count = 0;

  let node = head;

  while (node.next) {
    if (node.val < start) start = node.val;
    if (node.val > end) end = node.val;
    count++;
    node = node.next;
  }

  node = head;
  let nextNode = head.next;
  //   i = 0;
  while (nextNode) {
    const nextVal = nextNode.val;
    //   if(node.val<)
    node = node.next;
    nextNode = nextNode.next;

    // i++;
  }

  console.log({ start });
  console.log({ end });
};
