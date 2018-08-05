---
Difficulty: Hard
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Sort": https://leetcode.com/tag/sort
Similar Questions:
  "Merge Intervals": https://leetcode.com/problems/merge-intervals
  "Range Module": https://leetcode.com/problems/range-module
---

## [57. Insert Interval](https://leetcode.com/problems/insert-interval/description/)

### Problem:

Given a set of *non-overlapping* intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

**Example 1:**

```
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
```

**Example 2:**

```
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
```

### Solution:

The logic of the solution is pretty straight forward. Just need to carefully think through all the edge cases. It is better to choose readability over performance.

```javascript
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  const result = []
  const p = new Interval(newInterval.start, newInterval.end)
  for (var i = 0; i < intervals.length; i++) {
    const { start, end } = intervals[i]
    if (start > p.end) {
      break
    }

    if (end < p.start) {
      result.push(intervals[i])
      continue
    }

    if (start < p.start) {
      p.start = start
    }

    if (end > p.end) {
      p.end = end
    }
  }
  return [...result, p, ...intervals.slice(i)]
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

