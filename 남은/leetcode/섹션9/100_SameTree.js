// https://leetcode.com/problems/same-tree/
// Given the ps of two binary trees p and q,
// write a function to check if they are the same or not.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

const p = [1, 2, 3],
  q = [1, 2, 3];

// const p = [1, 2],
//   q = [1, null, 2];

// const p = [1, 2, 1]; // m, l, r
// const q = [1, 1, 2];

var isSameTree = function (p, q) {
  // Handle null root case
  if (!p && !q) return true;

  // If one is null, trees are different
  if (!p || !q) return false;

  // Compare value at this level
  if (p.val !== q.val) return false;

  // Check left first, then right
  if (!isSameTree(p.left, q.left)) return false;
  if (!isSameTree(p.right, q.right)) return false;

  // If all checks pass, trees are equal
  return true;
};

console.log(isSameTree(p, q));
