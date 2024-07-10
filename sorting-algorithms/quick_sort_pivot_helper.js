// my code
// swap function taken from bubble sort
function swap (arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// seems to work!
function pivot (arr, startIndex = 0, endIndex = arr.length-1){
    let pivotIndex = startIndex;
    for (let i = startIndex+1; i <= endIndex; i++ ){
        if (arr[i] < arr[startIndex]){
            pivotIndex++;
            swap(arr, i, pivotIndex);
        } 
    }
    swap(arr, startIndex, pivotIndex);
    return pivotIndex;
}

console.log(pivot([5, 2, 1, 8, 4, 7, 6, 3]))

// his code
// First Version
function pivot(arr, start=0, end=arr.length+1){
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  
    var pivot = arr[start];
    var swapIdx = start;
  
    for(var i = start + 1; i < arr.length; i++){
      if(pivot > arr[i]){
        swapIdx++;
        swap(arr,swapIdx,i);
      }
    }
    swap(arr,start,swapIdx);
    return swapIdx;
  }
  
  // Version with ES2015 Syntax
  function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }
  
  pivot([4,8,2,1,5,7,6,3])