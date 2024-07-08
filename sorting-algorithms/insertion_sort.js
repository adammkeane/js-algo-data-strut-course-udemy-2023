// swap function
function swap (arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// my code
function insertionSortPractice (arr) {
    for (let i = 1; i < arr.length; i++) {
        let testNum = arr[i] 
        for (let j = i-1; j > -1; j--) {
            console.log('j: ', j)
            if (testNum < arr[j]) {
                swap(arr, arr.indexOf(testNum), j)
            }  
        } 
    }
    return arr;
}

let array1 = [5, 3, 4, 1 ,2];

console.log(insertionSortPractice(array1));

// his code
function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])
