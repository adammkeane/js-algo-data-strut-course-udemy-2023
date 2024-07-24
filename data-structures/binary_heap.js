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
    extractMax() {
        swap(this.values, 0, this.values.length-1);
        const max = this.values.pop();

        function bubbleDown(arr, idx) {
            let childIndex1 = (2*idx)+1;
            let childIndex2 = (2*idx)+2;
            let childIndexBiggest;

            if (childIndex1 >= arr.length && childIndex2 >= arr.length) return;

            if (arr[childIndex1] > arr[childIndex2] || childIndex2 >= arr.length) {
                childIndexBiggest = childIndex1;
            } else {
                childIndexBiggest = childIndex2;
            }

            while (arr[childIndexBiggest] > arr[idx]) {
                    swap(arr, idx, childIndexBiggest);
                    bubbleDown(arr, childIndexBiggest)
            }
        }
        bubbleDown(this.values, 0)
        return max;
    }
}

let binaryHeap = new MaxBinaryHeap();
binaryHeap.values = [41,39,33,18,27,12];
// console.log(binaryHeap.insert(55));
console.log(binaryHeap.extractMax());
console.log(binaryHeap);



// official solution
