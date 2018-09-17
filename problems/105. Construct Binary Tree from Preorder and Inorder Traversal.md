---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Tree": https://leetcode.com/tag/tree
  "Depth-first Search": https://leetcode.com/tag/depth-first-search
Similar Questions:
  "Construct Binary Tree from Inorder and Postorder Traversal": https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal
---

## [105. Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/)

### Problem:

Given preorder and inorder traversal of a tree, construct the binary tree.

**Note:**
You may assume that duplicates do not exist in the tree.

For example, given

```
preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
```

Return the following binary tree:

```
    3
   / \
  9  20
    /  \
   15   7
```

### Solution:

Pattern of preorder traversal result: `pre(root) = root + pre(root.left) + pre(root.right)`

Pattern of inorder traversal result: `in(root) = in(root.left) + root + in(root.right)`

There are no duplicates so get the first item in preorder result, pinpoint it in inorder result. Then we know the size of left and right subtree.

Repeat the process on subtrees.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  return _buildTree(preorder, inorder, 0, preorder.length, 0, inorder.length)
};

function _buildTree (preorder, inorder, pStart, pEnd, iStart, iEnd) {
  if (pStart >= pEnd || iStart >= iEnd) {
    return null
  }
  const val = preorder[pStart]
  const node = new TreeNode(val)
  for (let i = iStart; i < iEnd; i++) {
    if (val === inorder[i]) {
      node.left = _buildTree(preorder, inorder, pStart + 1, i - iStart + (pStart + 1), iStart, i)
      node.right = _buildTree(preorder, inorder, (i + 1) - iEnd + pEnd, pEnd, i + 1, iEnd)
      break
    }
  }
  return node
}
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

