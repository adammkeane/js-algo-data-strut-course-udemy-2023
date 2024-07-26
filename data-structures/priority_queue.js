// swap function
function swap (arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

// my solution
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        let enqueuedNode = new Node(val, priority);
        this.values.push(enqueuedNode);

        function bubbleUp(arr, idx) {
            let parentIndex = Math.floor((idx-1)/2);
            while (parentIndex >= 0 && arr[idx].priority < arr[parentIndex].priority) {
                swap(arr, idx, parentIndex);
                if (parentIndex > 0) bubbleUp(arr, parentIndex);
            }
        }

        bubbleUp(this.values, this.values.length-1);
        return this.values;
    }
    dequeue() {
        if (this.values.length < 1) return null;
        swap(this.values, 0, this.values.length-1);
        const max = this.values.pop();

        function bubbleDown(arr, idx) {
            let childIndex1 = (2*idx)+1;
            let childIndex2 = (2*idx)+2;
            let childIndexLowestPriority;

            if (childIndex1 >= arr.length && childIndex2 >= arr.length) return;

            if (childIndex2 >= arr.length) {
                childIndexLowestPriority = childIndex1;
            } else if (childIndex1 >= arr.length) {
                childIndexLowestPriority = childIndex2;
            } else if (arr[childIndex1].priority < arr[childIndex2].priority) {
                childIndexLowestPriority = childIndex1;
            } else {
                childIndexLowestPriority = childIndex2;
            }

            while (arr[childIndexLowestPriority].priority < arr[idx].priority) {
                    swap(arr, idx, childIndexLowestPriority);
                    bubbleDown(arr, childIndexLowestPriority)
            }
        }
        bubbleDown(this.values, 0)
        return max;
    }
}

let priorityQueue = new PriorityQueue();
// priorityQueue.values = [41,39,33,18,27,12];
priorityQueue.enqueue(2, 2);
priorityQueue.enqueue(2, 1);
priorityQueue.enqueue(2, 4);
priorityQueue.enqueue(2, 3);
// priorityQueue.enqueue(2, 1.5);
priorityQueue.enqueue(2, 0);

console.log(priorityQueue.dequeue());


console.log(priorityQueue);



// official solution
class PriorityQueueOfficial {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

// let ER = new PriorityQueue();
// ER.enqueue("common cold",5)
// ER.enqueue("gunshot wound", 1)
// ER.enqueue("high fever",4)
// ER.enqueue("broken arm",2)
// ER.enqueue("glass in foot",3)