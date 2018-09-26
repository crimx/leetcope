---
Difficulty: Medium
Related Topics:
  "Tree": https://leetcode.com/tag/tree
  "Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
  "Path Sum": https://leetcode.com/problems/path-sum
  "Binary Tree Maximum Path Sum": https://leetcode.com/problems/binary-tree-maximum-path-sum
---

## [129. Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/description/)

### Problem:

Given a binary tree containing digits from `0-9` only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path `1->2->3` which represents the number `123`.

Find the total sum of all root-to-leaf numbers.

**Note:** A leaf is a node with no children.

**Example:**

```
Input: [1,2,3]
    1
   / \
  2   3
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
```

**Example 2:**

```
Input: [4,9,0,5,1]
    4
   / \
  9   0
 / \
5   1
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.
```

### Solution:

To write a clean solution for this promblem, use `0` as indicator of leaf node. If all the children get `0`, it is a leaf node, return the sum of current level.

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
var sumNumbers = function(root, sum = 0) {
  if (!root) { return 0 }
  sum = sum * 10 + root.val
  return sumNumbers(root.left, sum) + sumNumbers(root.right, sum) || sum
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

