// Sliding Window - findLongestSubstring

// Write a function called findLongestSubstring, 
// which accepts a string and returns the length of the longest substring with all distinct characters.

//     findLongestSubstring('') // 0
//     findLongestSubstring('rithmschool') // 7
//     findLongestSubstring('thisisawesome') // 6
//     findLongestSubstring('thecatinthehat') // 7
//     findLongestSubstring('bbbbbb') // 1
//     findLongestSubstring('longestsubstring') // 8
//     findLongestSubstring('thisishowwedoit') // 6

// Time Complexity - O(n)

// my solution - think i cheated because my solution is O(n^2) 
// (have a splice method inside a loop going over each char in string)

function findLongestSubstring(s) {
    if (s.length === 0) return 0

    let start = 0;
    let end = 0;
    let ns = [];
    let length = 0;
    let temp = 0;

    while (end <= s.length) {
        if (new Set(ns).size < ns.length) {
            // could have also used ns.shift() here, as just need to remove from the beginning.
            ns.splice(0, 1);
            start++
        } else {
            console.log(ns)
            temp = ns.length
            ns.push(s[end])
            end++
        }
        if (temp > length) {
            length = temp
        }
    }
    return length
}
// official solution

// findLongestSubstring Solution
// don't understand this solution

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}