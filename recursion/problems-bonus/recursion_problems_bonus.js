// 1. reverse

// Write a recursive function called reverse which accepts a string and returns a new string in reverse.
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// my solution
function reverse(s) {
    if (!s[0]) return ''
    return s.slice(-1) + reverse(s.slice(0, -1))
}

// official solution
function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

// 2. isPalindrome

// Write a recursive function called isPalindrome which returns true if 
// the string passed to it is a palindrome (reads the same forward and backward). 
// Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// my solution
function isPalindrome(s) {
    if (s.length === 1) return true
    return s.slice(0, 1) === s.slice(-1) && isPalindrome(s.slice(1, -1))
}

// official solution
function isPalindrome(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
    return false;
}

// someRecursive

// Write a recursive function called someRecursive which accepts an array and a callback. 
// The function returns true if a single value in the array returns true 
// when passed to the callback. Otherwise it returns false.

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// my solution
function someRecursive(a, cf) {
    if (a.length === 1) return cf(a[0])
    return cf(a[0]) || someRecursive(a.slice(1), cf)
}

// official solution
function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1), callback);
}

// flatten

// Write a recursive function called flatten which accepts an array of 
// arrays and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

// my solution
function flatten(a) {
    let na = [];
    function checkArr(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === "number") {
                na.push(arr[i])
            } else {
                checkArr(arr[i])
            }
        }
    }
    checkArr(a)
    return na
}

// official solution
function flatten(oldArr) {
    var newArr = []
    for (var i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}

// my solution


// official solution

// my solution


// official solution