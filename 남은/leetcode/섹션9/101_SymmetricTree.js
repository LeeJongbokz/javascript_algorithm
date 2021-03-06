// https://leetcode.com/problems/symmetric-tree/
// Given the root of a binary tree,
// check whether it is a mirror of itself
// (i.e., symmetric around its center).

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const dfs = (p, q) => {
    if (!p && !q) return true;
    if (p?.val !== q?.val) return false;
    return dfs(p.left, q.right) && dfs(p.right, q.left);
  };

  return dfs(root, root);
};
