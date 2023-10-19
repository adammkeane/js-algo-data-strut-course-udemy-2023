// Binary Search Exercise

// Write a function called binarySearch which accepts a sorted array 
// and a value and returns the index at which the value exists. 
// Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can 
// read how to implement it here
//  - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 
//  and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

// Examples:

//     binarySearch([1,2,3,4,5],2) // 1
//     binarySearch([1,2,3,4,5],3) // 2
//     binarySearch([1,2,3,4,5],5) // 4
//     binarySearch([1,2,3,4,5],6) // -1
//     binarySearch([
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//       40, 44, 64, 79, 84, 86, 95, 96, 98, 99
//     ], 10) // 2
//     binarySearch([
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//       40, 44, 64, 79, 84, 86, 95, 96, 98, 99
//     ], 95) // 16
//     binarySearch([
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//       40, 44, 64, 79, 84, 86, 95, 96, 98, 99
//     ], 100) // -1

// my solution
function binarySearch(a, v) {
    let start = 0;
    let end = a.length - 1;
    let m = 0;

    while (start <= end) {
        m = Math.floor((start + end) / 2)
        if (v < a[m]) {
            end = m - 1
        } else if (v > a[m]) {
            start = m + 1
        } else {
            return m
        }
    }
    return -1
}

// official solutions
// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === elem) {
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103)
