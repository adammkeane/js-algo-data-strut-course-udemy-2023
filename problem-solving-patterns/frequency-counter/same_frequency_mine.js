// Frequency Counter - sameFrequency
// 
// Write a function called sameFrequency. 
// Given two positive integers, find out if the two numbers have the same frequency of digits.
// 
// Your solution MUST have the following complexities:
// 
// Time: O(N)
// 
// Sample Input:
// 
//     sameFrequency(182,281) // true
//     sameFrequency(34,14) // false
//     sameFrequency(3589578, 5879385) // true
//     sameFrequency(22,222) // false

function sameFrequency(a, b) {
    let s1 = {};
    let s2 = {};

    if (String(a).length !== String(b).length) {
        return false;
    }

    for (let d of String(a)) {
        s1[d] = ++s1[d] || 1;
    }
    for (let d of String(b)) {
        s2[d] = ++s2[d] || 1;
    }

    for (let key in s1) {
        if (s1[key] !== s2[key]) {
            return false
        }
    }
    return true
}

sameFrequency(22, 223)