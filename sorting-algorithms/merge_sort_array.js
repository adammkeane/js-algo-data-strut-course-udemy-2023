// this code is needed before we implement merge sort. It how we actually merge the arrays.
// my code
function merge (arr1, arr2) {
    let newArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i])
            i++
        } else {
            newArr.push(arr2[j])
            j++
        }
    }
    if (i >= arr1.length) {
        while (j < arr2.length) {
            newArr.push(arr2[j])
            j++
        }
    } else {
        while (i < arr1.length) {
            newArr.push(arr1[i])
            i++
        }
    }
    return newArr
}

console.log(merge([1,10, 50], [2, 14, 99, 100]))

// his code
// Merges two already sorted arrays
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}
merge([100,200], [1,2,3,5,6])