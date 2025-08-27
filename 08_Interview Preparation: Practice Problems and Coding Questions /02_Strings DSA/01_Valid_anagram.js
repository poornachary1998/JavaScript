// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 const isAnagram = function(s,t){
    if(s.length !== t.length) return false;

    let charCounts={};
    for(let i = 0; i<s.length; i++){
        let first = s[i];

        if(!charCounts[first]){
            charCounts[first] = 1;
        }
        else charCounts[first]++;
    }

    for(let i = 0; i<t.length; i++){
        let last = t[i];

        if(charCounts[last] === undefined || charCounts[last] < 1){
            return false;
        }
       charCounts[last]--;
    }
    return true;
 }

console.log( isAnagram("anagram","nagaram"));
// Input: s = "rat", t = "car"
console.log( isAnagram("rat","cr"));

