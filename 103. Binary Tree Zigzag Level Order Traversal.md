---
Difficulty: Medium
Related Topics:
  "Stack": https://leetcode.com/tag/stack
  "Tree": https://leetcode.com/tag/tree
  "Breadth-first Search": https://leetcode.com/tag/breadth-first-search
Similar Questions:
  "Binary Tree Level Order Traversal": https://leetcode.com/problems/binary-tree-level-order-traversal
---

## [103. Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/)

### Problem:

Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree `[3,9,20,null,null,15,7]`,

```
3
   / \
  9  20
    /  \
   15   7
```

return its zigzag level order traversal as:

```
[
  [3],
  [20,9],
  [15,7]
]
```

### Solution:

Reverse the level when pushing to the reuslt.

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
var zigzagLevelOrder = function(root) {
  if (!root) { return [] }

  const result = []
  const queue = [NaN, root]
  let zipzag = false
  while (queue.length > 1) {
    const node = queue.shift()
    if (node !== node) {
      if (zipzag = !zipzag) {
        result.push(queue.map(n => n.val))
      } else {
        result.push(queue.map(n => n.val).reverse())
      }
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

