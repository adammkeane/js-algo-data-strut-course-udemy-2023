class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// my solution
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        let enqueuedNode = new Node(val);
        if (this.size === 0) {
            this.first = enqueuedNode;
        } else {
            this.last.next = enqueuedNode;
        }
        this.last = enqueuedNode;
        this.size++;
        return this.size;
    }
}

let queue = new Queue();
queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(13);
console.log(queue.enqueue(14));
// console.log(queue.dequeue());
console.log(queue);






// official solution