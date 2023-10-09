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

// my solution

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
        // i think this first if statement may be unecessary.
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

// official solution

function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')