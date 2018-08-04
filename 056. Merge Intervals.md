---
Difficulty: Medium
Related Topics:
  "Array": https://leetcode.com/tag/array
  "Sort": https://leetcode.com/tag/sort
Similar Questions:
  "Insert Interval": https://leetcode.com/problems/insert-interval
  "Meeting Rooms": https://leetcode.com/problems/meeting-rooms
  "Meeting Rooms II": https://leetcode.com/problems/meeting-rooms-ii
  "Teemo Attacking": https://leetcode.com/problems/teemo-attacking
  "Add Bold Tag in String": https://leetcode.com/problems/add-bold-tag-in-string
  "Range Module": https://leetcode.com/problems/range-module
  "Employee Free Time": https://leetcode.com/problems/employee-free-time
  "Partition Labels": https://leetcode.com/problems/partition-labels
---

## [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/description/)

### Problem:

Given a collection of intervals, merge all overlapping intervals.

**Example 1:**

```
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
```

**Example 2:**

```
Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considerred overlapping.
```

### Solution:

Sort then merge.

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
 * @return {Interval[]}
 */
var merge = function(intervals) {
  if (intervals.length <= 1) { return intervals }
  intervals.sort((a, b) => (a.start - b.start) || (a.end - b.end))
  let last = new Interval(intervals[0].start, intervals[0].end)
  const result = [last]
  for (let i = 1; i < intervals.length; i++) {
    const { start, end } = intervals[i]
    if (start > last.end) {
      last = new Interval(start, end)
      result.push(last)
    } else if (end > last.end) {
      last.end = end
    }
  }
  return result
};
```


*Template generated via [Leetmark](https://github.com/crimx/crx-leetmark).*

