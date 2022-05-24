// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 똑같은 노드를 발견하면 트루 리턴
// ㄴㄴ 그 다음 것도 쭉 같아야 함
// true 일 때 힙 아웃오브메모리 나옴 왜냐면 visited에 계속 쌓이니까

// [-1,-7,7,-4,19,6,-9,-5,-2,-5]
// [-1,-7,7,-4,19,6,-9,-5,-2,-5,9] // 덜 헷갈리게...
// 6
// -> 5,-2,-5 때문에 에러..
// 두 번째 -5일 때는 비교하면 안 됨
// 마지막까지 갔다는 걸 어떻게 확인하지?
// head 비교? -> node.next = head?

// 마지막을 확인할 순 없을 것 같고
// 언젠간 같아진다는 점을 이용해야 할 것 같다.
// 2번 째 사이클에서는 알 수 없고
// 3번은 돌려야 할듯
// [-1,-7,7,-4,19,6,-9,-5,-2,-5,9,//-1,-7,7,-4,19,6,-9,-5,-2,-5,9]
// [-1,-7,7,-4,19,6,-9,-5,-2,-5,9,//-1,-7,7,-4,19,6,-9,-5,-2,-5,9,//-1,-7,7,-4,19,6,-9,-5,-2,-5,9]
// 근데 이렇게 하면 안 겹치는 친구도 겹치게 되니... 이렇게 하면 안 될듯

// [-21,10,17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,//5]
// -1

var hasCycle = function (head) {
  let node = head; //[3,2,0,-4]
  if (!node) return false; // for edge case
  while (node && node.next) {
    head = head.next; //1: [2,0,-4] //2: [0,-4] //3: [-4,2,0,-4] //4: [2,0,-4]
    node = node.next.next; //1: [0,-4,2,0,0-4] //2: [2,0,0-4] //3: [0,-4,2,0,-4] //4: [2,0,-4]
    if (head === node) return true;
  }
  return false;
};

// https://leetcode.com/problems/linked-list-cycle/discuss/2048722/Javascript-or-Maximum-efficiency-or-O(n)-Time-or-O(1)-Space
// 이 솔류션도 좋다.
