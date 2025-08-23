// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 
function MergeIntervals(intervals){
  if (!intervals || intervals.length === 0) return [];

  // sort by start
  intervals.sort((a,b) => a[0] - b[0]);

  const merged = [];
  let [start, end] = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [s, e] = intervals[i];

    if (s <= end) {
      // overlap (touching counts)
      end = Math.max(end, e);
    } else {
      // no overlap: commit previous block
      merged.push([start, end]);
      [start, end] = [s, e];
    }
  }

  // commit final block ONCE (outside the loop)
  merged.push([start, end]);
  return merged;
}

console.log(MergeIntervals([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]
console.log(MergeIntervals([[1,4],[4,5]]));                 // [[1,5]]
console.log(MergeIntervals([[1,10],[2,3]]));                // [[1,10]]
