// https://leetcode.com/problems/subtree-of-another-tree/
// 572. Subtree of Another Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

const root = [3, 4, 5, 1, 2],
  subRoot = [4, 1, 2];

// const root = [3, 4, 5, 1, 2, null, null, null, null, 0],
//   subRoot = [4, 1, 2];

var isSubtree = function (root, subRoot) {};
console.log(isSubtree(root, subRoot));
