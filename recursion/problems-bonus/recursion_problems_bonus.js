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

// 3. someRecursive

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

// 4. flatten

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

// 5. capitalizeFirst

// Write a recursive function called capitalizeFirst. Given an array of strings, 
// capitalize the first letter of each string in the array.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

// my solution
function capitalizeFirst(a) {
    let na = []
    let temp = []
    for (let e of a) {
        temp = [...e];
        temp[0] = temp[0].toUpperCase();
        na.push(temp.join(""));
    }
    return na
}

// official solution
function capitalizeFirst(array) {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
    res.push(string);
    return res;
}

// 6. nestedEvenSum

// Write a recursive function called nestedEvenSum. Return the sum of all even numbers 
// in an object which may contain nested objects.

// var obj1 = {
//     outer: 2,
//     obj: {
//       inner: 2,
//       otherObj: {
//         superInner: 2,
//         notANumber: true,
//         alsoNotANumber: "yup"
//       }
//     }
//   }

//   var obj2 = {
//     a: 2,
//     b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//     c: {c: {c: 2}, cc: 'ball', ccc: 5},
//     d: 1,
//     e: {e: {e: 2}, ee: 'car'}
//   };

//   nestedEvenSum(obj1); // 6
//   nestedEvenSum(obj2); // 10

// my solution
function nestedEvenSum(o) {
    let sum = 0;

    function getEvens(o) {
        for (let key in o) {
            if (typeof o[key] === "number" && o[key] % 2 === 0) {
                sum += o[key];
            }
            else if (typeof o[key] === "object") {
                getEvens(o[key])
            }
        }
    }
    getEvens(o)
    return sum
}

// official solution
function nestedEvenSum(obj, sum = 0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sum += obj[key];
        }
    }
    return sum;
}

// 7. capitalizeWords

// Write a recursive function called capitalizeWords. 
// Given an array of words, return a new array containing each word capitalized

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

// my solution
function capitalizeWords(a) {
    let na = [];

    function recur(str) {
        na.push(str.toUpperCase())
    }

    for (let e of a) {
        recur(e);
    }
    return na
}

// official solution
function capitalizeWords(array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length - 1)[0].toUpperCase());
    return res;

}

// 8. stringifyNumbers

// Write a function called stringifyNumbers which takes in an object and finds all 
// of the values which are numbers and converts them to strings. 
// Recursion would be a great way to solve this!

// Description doesn't mention not to change original object, but test fails if you
// alter orginal object.

// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }

// stringifyNumbers(obj)

// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }

// my solution
function stringifyNumbers(o) {
    let no = {}
    for (let key in o) {
        console.log(key)
        if (typeof o[key] === "number") {
            no[key] = o[key].toString()
        } else if (typeof o[key] === "object" && !Array.isArray(o[key])) {
            no[key] = stringifyNumbers(o[key])
        } else {
            no[key] = o[key]
        }
    }
    return no
}

// official solution
function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

// 9. collectStrings

// Write a function called collectStrings which accepts an object and returns 
// an array of all the values in the object that have a typeof string

// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }

// collectStrings(obj) // ["foo", "bar", "baz"])

// my solution
let a = []
function collectStrings(o) {
    for (let key in o) {
        console.log(key)
        if (typeof o[key] === "object") {
            collectStrings(o[key])
        } else if (typeof o[key] === "string") {
            a.push(o[key])
        }
    }
    console.log(a)
    return a
}

// official solution
// collectStrings Solution: Helper Method Recursion Version

function collectStrings(obj) {
    var stringsArr = [];

    function gatherStrings(o) {
        for (var key in o) {
            if (typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if (typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }

    gatherStrings(obj);

    return stringsArr;
}

// collectStrings Solution: Pure Recursion Version

function collectStrings(obj) {
    var stringsArr = [];
    for (var key in obj) {
        if (typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if (typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }

    return stringsArr;
}