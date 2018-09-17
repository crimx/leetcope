---
Difficulty: Easy
Related Topics:
  "Tree": https://leetcode.com/tag/tree
  "Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
  "Balanced Binary Tree": https://leetcode.com/problems/balanced-binary-tree
  "Minimum Depth of Binary Tree": https://leetcode.com/problems/minimum-depth-of-binary-tree
  "Maximum Depth of N-ary Tree": https://leetcode.com/problems/maximum-depth-of-n-ary-tree
---

## [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/description/)

### Problem:

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

**Note:** A leaf is a node with no children.

**Example:**

Given binary tree `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

return its depth = 3.

### Solution:

The code should be self-evident.

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
var maxDepth = function(root) {
  return root === null
    ? 0
    : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

