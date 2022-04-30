// 226. Invert Binary Tree
// https://leetcode.com/problems/invert-binary-tree/

// Given the root of a binary tree, invert the tree, and return its root.

// left랑 right랑 바꾸는 거임

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;

  const right = root.right;
  root.right = root.left;
  root.left = right;

  invertTree(root.left);
  invertTree(root.right);
  return root;
};
