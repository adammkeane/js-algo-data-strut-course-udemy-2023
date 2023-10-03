// Frequency Counter - validAnagram
// 
// Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, 
// formed from iceman.
// 
// Examples:
// 
//     validAnagram('', '') // true
//     validAnagram('aaz', 'zza') // false
//     validAnagram('anagram', 'nagaram') // true
//     validAnagram("rat","car") // false) // false
//     validAnagram('awesome', 'awesom') // false
//     validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
//     validAnagram('qwerty', 'qeywrt') // true
//     validAnagram('texttwisttime', 'timetwisttext') // true

function validAnagram(a, b) {
    if (a.length !== b.length) {
        return false
    }

    let s1 = {};
    let s2 = {};

    for (let c of a) {
        s1[c] = ++s1[c] || 1;
    }

    for (let c of b) {
        s2[c] = ++s2[c] || 1;
    }

    for (let key in s1) {
        if (!(key in s2)) {
            return false
        }
        if (s1[key] !== s2[key]) {
            return false
        }
    }

    return true
}

console.log(validAnagram("rat", "car"))