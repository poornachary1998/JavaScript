// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
// Example 3:

// Input: nums = [1,0,1,2]
// Output: 3

function LongestConsecutive(nums){
    let unique = new Set(nums);

    let best = 0;

    for(let x of unique){
        if(!unique.has(x-1)){
            let y = x;
            let len = 1;

            while(unique.has(y + 1)){
                y++;
                len++
            }
            if(len> best){
                best = len;
            }
        }
        
    }
    return best;
}

console.log(LongestConsecutive([100,4,200,1,3,2]));