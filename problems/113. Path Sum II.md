---
Difficulty: Medium
Related Topics:
  "Tree": https://leetcode.com/tag/tree
  "Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
  "Path Sum": https://leetcode.com/problems/path-sum
  "Binary Tree Paths": https://leetcode.com/problems/binary-tree-paths
  "Path Sum III": https://leetcode.com/problems/path-sum-iii
  "Path Sum IV": https://leetcode.com/problems/path-sum-iv
---

## [113. Path Sum II](https://leetcode.com/problems/path-sum-ii/description/)

### Problem:

Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

**Note:** A leaf is a node with no children.

**Example:**

Given the below binary tree and `sum = 22`,

```
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
```

Return:

```
[
   [5,4,11,2],
   [5,8,4,5]
]
```

### Solution:

Simple backtracking.

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
 * @return {number[][]}
 */
var pathSum = function(root, sum, path = [], result = []) {
  if (!root) { return result }

  if (root.left === null && root.right === null) {
    if (root.val === sum) {
      result.push([...path, root.val])
    }
    return result
  }

  path.push(root.val)
  pathSum(root.left, sum - root.val, path, result)
  pathSum(root.right, sum - root.val, path, result)
  path.pop()

  return result
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

