// my code
function swap (arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function bubbleSortPractice (arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
    return arr
}

let array1 = [5, 3, 4, 1 ,2]

console.log(bubbleSortPractice(array1))

// his code
// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr){
    for(var i = arr.length; i > 0; i--){
      for(var j = 0; j < i - 1; j++){
        console.log(arr, arr[j], arr[j+1]);
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;         
        }
      }
    }
    return arr;
  }
  
  // ES2015 Version
  function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
    return arr;
  }
  
  bubbleSort([8,1,2,3,4,5,6,7]);

// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
      noSwaps = true;
      for(var j = 0; j < i - 1; j++){
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          noSwaps = false;         
        }
      }
      if(noSwaps) break;
    }
    return arr;
  }
  
  bubbleSort([8,1,2,3,4,5,6,7]);

