---
Difficulty: Easy
Related Topics:
  "Tree": https://leetcode.com/tag/tree
  "Depth-first Search": https://leetcode.com/tag/depth-first-search
  "Breadth-first Search": https://leetcode.com/tag/breadth-first-search
---

## [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/description/)

### Problem:

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree `[1,2,2,3,4,4,3]` is symmetric:

```
1
   / \
  2   2
 / \ / \
3  4 4  3
```

But the following `[1,2,2,null,3,null,3]`  is not:

```
1
   / \
  2   2
   \   \
   3    3
```

Note:
Bonus points if you could solve it both recursively and iteratively.

### Solution:

#### ONE

The result of pre-order and post-order traversal on a symmetric tree should be the same.

So just like [100. Same Tree](./100.%20Same%20Tree.md). Except one is pre-order traversal and the other is post-order.

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
var isSymmetric = function(root) {
  return root === null || isSymmetricTree(root.left, root.right)
};

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSymmetricTree (p, q) {
  return p === null && q === null ||
    p !== null && q !== null && p.val === q.val && isSymmetricTree(p.left, q.right) && isSymmetricTree(p.right, q.left)
};
```

#### TWO

Level order traversal. Check symmetry before entering the next level.

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
var isSymmetric = function(root) {
  if (root === null) { return true }

  const queue = [NaN, root]

  while (queue.length > 1) {
    const node = queue.shift()
    if (node !== node) {
      for (let i = 0, j = queue.length-1; i <= j; i++, j--) {
        if (queue[i] === null && queue[j] !== null ||
            queue[i] !== null && queue[j] === null ||
            queue[i] !== null && queue[j] !== null && queue[i].val !== queue[j].val
           ) {
          return false
        }
      }
      queue.push(NaN)
    } else {
      if (node !== null) {
        queue.push(node.left)
        queue.push(node.right)
      }
    }
  }

  return true
};
```

*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

