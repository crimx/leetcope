---
Difficulty: Easy
Related Topics:
  "Tree": https://leetcode.com/tag/tree
  "Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
  "Maximum Depth of Binary Tree": https://leetcode.com/problems/maximum-depth-of-binary-tree
---

## [110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/description/)

### Problem:

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the depth of the two subtrees of *every* node never differ by more than 1.

**Example 1:**

Given the following tree `[3,9,20,null,null,15,7]`:

```
    3
   / \
  9  20
    /  \
   15   7
```

Return true.

**Example 2:**

Given the following tree `[1,2,2,3,3,null,null,4,4]`:

```
       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
```

Return false.

### Solution:

Get the depth of subtrees and compare. Prune the DFS tree by returning `-1`.

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
 * @return {boolean}
 */
var isBalanced = function(root) {
  return getDepth(root) >= 0
};

function getDepth (root) {
  if (!root) { return 0 }
  const leftDepth = getDepth(root.left)
  if (leftDepth < 0) { return -1 }
  const rightDepth = getDepth(root.right)
  if (rightDepth < 0) { return -1 }
  return Math.abs(leftDepth - rightDepth) <= 1 ? Math.max(leftDepth, rightDepth) + 1 : -1
}
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

