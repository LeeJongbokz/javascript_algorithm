// https://leetcode.com/problems/palindrome-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// stack 사용

var isPalindrome = function (head) {
  let answer = true;
  const stack = [];
  let node = head;
  let count = 0;
  while (node.next) {
    count++;
    node = node.next;
  }
  count++;
  node = head;

  for (let idx = 0; idx < Math.ceil(count / 2); idx++) {
    stack.push(node.val);
    node = node.next;
  }

  // [1,2,3,2,1]일 경우 3제거
  if (count % 2 === 1) stack.pop();

  while (stack.length) {
    const elem = stack.pop();
    if (elem !== node.val) answer = false;

    node = node.next;
  }

  return answer;
};
