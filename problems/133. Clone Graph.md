---
Difficulty: Medium
Related Topics:
  "Depth-first Search": https://leetcode.com/tag/depth-first-search
  "Breadth-first Search": https://leetcode.com/tag/breadth-first-search
  "Graph": https://leetcode.com/tag/graph
Similar Questions:
  "Copy List with Random Pointer": https://leetcode.com/problems/copy-list-with-random-pointer
---

## [133. Clone Graph](https://leetcode.com/problems/clone-graph/description/)

### Problem:

Given the head of a graph, return a deep copy (clone) of the graph. Each node in the graph contains a `label` (`int`) and a list (`List[UndirectedGraphNode]`) of its `neighbors`. There is an edge between the given node and each of the nodes in its neighbors.

OJ's undirected graph serialization (so you can understand error output):

Nodes are labeled uniquely.

We use `#` as a separator for each node, and `,` as a separator for node label and each neighbor of the node.

As an example, consider the serialized graph `{0,1,2#1,2#2,2}`.

The graph has a total of three nodes, and therefore contains three parts as separated by `#`.

1. First node is labeled as `0`. Connect node `0` to both nodes `1` and `2`.
2. Second node is labeled as `1`. Connect node `1` to node `2`.
3. Third node is labeled as `2`. Connect node `2` to node `2` (itself), thus forming a self-cycle.

Visually, the graph looks like the following:

```
       1
      / \
     /   \
    0 --- 2
         / \
         \_/

```

**Note**: The information about the tree serialization is only meant so that you can understand error output if you get a wrong answer. You don't need to understand the serialization to solve the problem.

### Solution:

DFS. Cache the visited node before entering the next recursion.

```javascript
/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
  const cache = {}
  return _clone(graph)

  function _clone (graph) {
    if (!graph) { return graph }
    const label = graph.label
    if (!cache[label]) {
      cache[label] = new UndirectedGraphNode(label)
      cache[label].neighbors = graph.neighbors.map(_clone)
    }
    return cache[label]
  }
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

