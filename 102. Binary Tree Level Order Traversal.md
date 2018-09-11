---
Difficulty: Medium
Related Topics:
  "Tree": https://leetcode.com/tag/tree
  "Breadth-first Search": https://leetcode.com/tag/breadth-first-search
Similar Questions:
  "Binary Tree Zigzag Level Order Traversal": https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal
  "Binary Tree Level Order Traversal II": https://leetcode.com/problems/binary-tree-level-order-traversal-ii
  "Minimum Depth of Binary Tree": https://leetcode.com/problems/minimum-depth-of-binary-tree
  "Binary Tree Vertical Order Traversal": https://leetcode.com/problems/binary-tree-vertical-order-traversal
  "Average of Levels in Binary Tree": https://leetcode.com/problems/average-of-levels-in-binary-tree
  "N-ary Tree Level Order Traversal": https://leetcode.com/problems/n-ary-tree-level-order-traversal
---

## [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/description/)

### Problem:

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree `[3,9,20,null,null,15,7]`,

```
3
   / \
  9  20
    /  \
   15   7
```

return its level order traversal as:

```
[
  [3],
  [9,20],
  [15,7]
]
```

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) { return [] }

  const result = []
  const queue = [NaN, root]
  while (queue.length > 1) {
    const node = queue.shift()
    if (node !== node) {
      result.push(queue.map(n => n.val))
      queue.push(NaN)
    } else {
      if (node.left) { queue.push(node.left) }
      if (node.right) { queue.push(node.right) }
    }
  }

  return result
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

