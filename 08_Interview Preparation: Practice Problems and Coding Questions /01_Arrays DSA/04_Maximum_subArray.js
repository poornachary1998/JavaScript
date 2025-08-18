// Given an integer array nums, find the subarray with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 
// function MaximumSubArray(nums){
// let maxValue = -Infinity;
// for(let i = 0; i< nums.length; i++){
//     let currentSum = 0
//     for(let j = i; j< nums.length; j++){
//         currentSum = currentSum + nums[j];
//         if(currentSum > maxValue){
//             maxValue = currentSum;
//         }
//     }
// }
// return maxValue;
// }
// console.log(MaximumSubArray([-2,1,-3,4,-1,2,1,-5,4]));

// What if interviewer asks provide me an array of max sum?

 
function MaximumSubArray(nums){
let maxValue = -Infinity;
let startIdx = 0;
let endIdx = 0;
for(let i = 0; i< nums.length; i++){
    let currentSum = 0
    for(let j = i; j< nums.length; j++){
        currentSum = currentSum + nums[j];
        if(currentSum > maxValue){
            maxValue = currentSum;
            startIdx = i;
            endIdx = j;
        }
    }
}
return {maxValue,
    subArray: nums.slice(startIdx, endIdx + 1)
};
}
console.log(MaximumSubArray([-2,1,-3,4,-1,2,1,-5,4]));