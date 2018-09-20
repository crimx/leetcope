---
Difficulty: Hard
Related Topics:
  "Tree": https://leetcode.com/tag/tree
  "Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
  "Path Sum": https://leetcode.com/problems/path-sum
  "Sum Root to Leaf Numbers": https://leetcode.com/problems/sum-root-to-leaf-numbers
  "Path Sum IV": https://leetcode.com/problems/path-sum-iv
  "Longest Univalue Path": https://leetcode.com/problems/longest-univalue-path
---

## [124. Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/description/)

### Problem:

Given a **non-empty** binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain **at least one node** and does not need to go through the root.

**Example 1:**

```
Input: [1,2,3]

       1
      / \
     2   3

Output: 6

```

**Example 2:**

```
Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42

```

### Solution:

For every `node`, there are six possible ways to get the max path sum:

- With `node.val`
  1. `node.val` plus the max sum of a path that ends with `node.left`.
  2. `node.val` plus the max sum of a path that starts with `node.right`.
  3. `node.val` plus the max sum of both paths.
  4. Just `node.val` (the max sum of both paths are negative).
- Without`node.val` (disconnected)
  1. The max-sum path is somewhere under the `node.left` subtree.
  2. The max-sum path is somewhere under the `node.right` subtree.

There are two ways to implement this.

#### ONE

Define a function that returns two values. The max sum of a path that may or may not end with `root` node, and the max sum of the path that ends with `root` node.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  return Math.max(..._maxPathSum(root))
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function _maxPathSum (root) {
  if (!root) { return [-Infinity, -Infinity] }
  
  const left = _maxPathSum(root.left)
  const right = _maxPathSum(root.right)
  return [
    Math.max(left[0], right[0], root.val + Math.max(0, left[1], right[1], left[1] + right[1])),
    Math.max(left[1], right[1], 0) + root.val
  ]
}
```

#### TWO

Just return the later (max sum of a path that ends with `root`). Maintain a global variable to store the disconnected max sum.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  const global = { max: -Infinity }
  _maxPathSum(root, global)
  return global.max
};


/**
 * @param {TreeNode} root
 * @param {object} global
 * @param {number} global.max 
 * @return {number[]}
 */
function _maxPathSum (root, global) {
  if (!root) { return -Infinity }
  
  const left = _maxPathSum(root.left, global)
  const right = _maxPathSum(root.right, global)
  const localMax = Math.max(left, right, 0) + root.val
  global.max = Math.max(global.max, localMax, root.val + left + right)
  return localMax
}
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

