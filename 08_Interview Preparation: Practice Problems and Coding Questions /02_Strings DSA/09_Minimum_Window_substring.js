// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
 
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let map = new Map();
    for(let letter of t){
        if(!map.has(letter)){
            map.set(letter,1)
        }else{
            map.set(letter, map.get(letter)+1)
        }
    }

    let left = 0;
    let right = 0;
    let minWindow = "";
    let count = map.size;
    let len= Infinity;

    while(right < s.length){
        let rLetter = s[right];

        if(map.has(rLetter)){
            map.set(rLetter, map.get(rLetter)-1);

            if(map.get(rLetter)===0){
                count--;
            }
        }
        right++
        while(count === 0){
            if(right - left < len){
                len = right - left;
                minWindow = s.slice(left, right)
            }
            let lLetter = s[left];
            if(map.has(lLetter)){
                map.set(lLetter, map.get(lLetter)+1);

                if(map.get(lLetter)>0){
                    count++
                }
            }
            left++;
        }
    }
    return minWindow;
};

console.log(minWindow("ADOBECODEBANC","ABC"))