// my code
// code from pivot helper
function pivot(arr, start = 0, end = arr.length + 1) {
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    var pivot = arr[start];
    var swapIdx = start;

    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

// this seems to work!
function quickSort(arr) {
    let pivotIndex = pivot(arr)
    if (arr.length < 2 || pivotIndex === 0) return arr
    return quickSort(arr.slice(0, pivotIndex)).concat(quickSort(arr.slice(pivotIndex)))
}
console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]))



// his code
// seems more confusin than mine. Might be better becuase it doesn't use concat though.
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr, left, pivotIndex - 1);
        //right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23])




// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1
