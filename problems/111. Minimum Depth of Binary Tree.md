---
Difficulty: Easy
Related Topics:
  "Tree": https://leetcode.com/tag/tree
  "Depth-first Search": https://leetcode.com/tag/depth-first-search
  "Breadth-first Search": https://leetcode.com/tag/breadth-first-search
Similar Questions:
  "Binary Tree Level Order Traversal": https://leetcode.com/problems/binary-tree-level-order-traversal
  "Maximum Depth of Binary Tree": https://leetcode.com/problems/maximum-depth-of-binary-tree
---

## [111. Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/description/)

### Problem:

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

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

return its minimum depth = 2.

### Solution:

Ignore `null` children.

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
var minDepth = function(root) {
  if (!root) { return 0 }
  if (root.left !== null && root.right !== null) {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
  } else if (root.left !== null) {
    return minDepth(root.left) + 1
  } else {
    return minDepth(root.right) + 1
  }
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

