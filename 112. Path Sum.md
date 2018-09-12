---
Difficulty: Easy
Related Topics:
  "Tree": https://leetcode.com/tag/tree
  "Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
  "Path Sum II": https://leetcode.com/problems/path-sum-ii
  "Binary Tree Maximum Path Sum": https://leetcode.com/problems/binary-tree-maximum-path-sum
  "Sum Root to Leaf Numbers": https://leetcode.com/problems/sum-root-to-leaf-numbers
  "Path Sum III": https://leetcode.com/problems/path-sum-iii
  "Path Sum IV": https://leetcode.com/problems/path-sum-iv
---

## [112. Path Sum](https://leetcode.com/problems/path-sum/description/)

### Problem:

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

**Note:** A leaf is a node with no children.

**Example:**

Given the below binary tree and `sum = 22`,

```
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
```

return true, as there exist a root-to-leaf path `5->4->11->2` which sum is 22.

### Solution:

Note that node value could be negative so pruning can not be performed.

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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) { return false }
  if (root.left === null && root.right === null) { return root.val === sum }
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

