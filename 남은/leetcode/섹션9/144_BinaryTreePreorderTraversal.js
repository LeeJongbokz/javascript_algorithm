// https://leetcode.com/problems/binary-tree-preorder-traversal/
// 144. Binary Tree Preorder Traversal

// Given the root of a binary tree, return the preorder traversal of its nodes' values.

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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const values = [];
  const dfs = (node) => {
    if (!node) return;
    values.push(node.val); //Get the value
    if (node.left) dfs(node.left); //traverse left subtree
    if (node.right) dfs(node.right); //traverse right subtree
  };
  dfs(root);
  return values;
};
