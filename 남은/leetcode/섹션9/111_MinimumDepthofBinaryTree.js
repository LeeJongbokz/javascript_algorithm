// https://leetcode.com/problems/minimum-depth-of-binary-tree/
// 111. Minimum Depth of Binary Tree
// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

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
var minDepth = function (root) {
  if (!root) return 0;

  //If there is no left subTree then traverse right subtree only
  if (!root.left) return 1 + minDepth(root.right);

  //If there is no right subTree then traverse left subtree only
  if (!root.right) return 1 + minDepth(root.left);

  //Otherwise return the min of the height of right and left subtree
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
