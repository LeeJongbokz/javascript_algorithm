// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// 104. Maximum Depth of Binary Tree

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
 * @return {number}
 */

// DFS Recursive Solution
var maxDepth = function (root) {
  let maxDepth = 0;
  function dfs(root, depth) {
    if (!root) {
      maxDepth = Math.max(depth, maxDepth);
      return;
    }
    dfs(root.left, depth + 1);
    dfs(root.right, depth + 1);
  }
  dfs(root, 0);
  return maxDepth;
  // Time Complexity: O(n)
  // Space Complexity: O(n), in the worst case; in case of a skewed tree
};
