---
Difficulty: Medium
Related Topics:
  "Tree": https://leetcode.com/tag/tree
  "Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
  "Flatten a Multilevel Doubly Linked List": https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list
---

## [114. Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/)

### Problem:

Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

```
    1
   / \
  2   5
 / \   \
3   4   6
```

The flattened tree should look like:

```
1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
```

### Solution:

Return the leaf node of a flattened subtree for concatenation.

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  _flatten(root)
};

/**
 * @param {TreeNode} root
 * @return {TreeNode} leaf node of a flattened subtree
 */
function _flatten (root) {
  if (!root) { return null }
  const leftLeaf = _flatten(root.left)
  const rightLeaf = _flatten(root.right)
  if (leftLeaf !== null) {
    leftLeaf.right = root.right
    root.right = root.left
  } else if (rightLeaf === null) {
    return root
  }
  
  root.left = null
  return rightLeaf || leftLeaf
}
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

