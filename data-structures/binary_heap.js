// swap function
function swap (arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// my solution
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(val) {
        this.values.push(val);

        function bubbleUp(arr, idx) {
            let parentIndex = Math.floor((idx-1)/2);
            while (arr[idx] > arr[parentIndex]) {
                swap(arr, idx, parentIndex);
                if (parentIndex > 0) bubbleUp(arr, parentIndex);
            }
        }

        bubbleUp(this.values, this.values.length-1);
        return this.values;
    }
}

let binaryHeap = new MaxBinaryHeap();
binaryHeap.values = [41,39,33,18,27,12];
console.log(binaryHeap.insert(55));
// console.log(binaryHeap);



// official solution
