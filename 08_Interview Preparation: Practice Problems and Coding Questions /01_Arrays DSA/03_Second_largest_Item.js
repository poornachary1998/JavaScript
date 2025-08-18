// Problem statement
// You have been given an array/list 'ARR' of integers. Your task is to find the second largest element present in the 'ARR'.

// Note:
// a) Duplicate elements may be present.

// b) If no such element is present return -1.
// Example:
// Input: Given a sequence of five numbers 2, 4, 5, 6, 8.

// Output:  6

// Explanation:
// In the given sequence of numbers, number 8 is the largest element, followed by number 6 which is the second-largest element. Hence we return number 6 which is the second-largest element in the sequence.

function secondLargestNumber(arr){
let first = -Infinity;
let second = -Infinity;

for(let num of arr){
if(num > first){
    second = first;
    first = num;
} else if(num > second && num < first){
    second= num;
}
}
return second;
}
console.log(secondLargestNumber([2, 4, 5, 16, 8]));