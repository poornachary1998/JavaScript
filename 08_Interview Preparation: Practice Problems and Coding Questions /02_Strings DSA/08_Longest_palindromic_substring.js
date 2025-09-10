// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let finalMax = [0,1];
    
    function getPalindrome(left, right){
        while(left >= 0 && right < s.length && s[left] === s[right]){
            left --;
            right ++;
        }
        return [left+1, right]
    }

    for(let i  = 0; i< s.length; i++){
        const odd = getPalindrome(i-1, i+1);
        const even = getPalindrome(i-1, i);

        let currentMax = (odd[1] - odd[0]) > (even [1] - even [0]) ? odd : even;

         finalMax = (currentMax[1] - currentMax[0]) >(finalMax[1] - finalMax[0]) ? currentMax : finalMax

    }
    return s.substring(finalMax[0],finalMax[1])
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
