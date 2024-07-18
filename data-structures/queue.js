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
    push(val) {
        let pushedNode = new Node(val);
        if (this.size === 0) {
            this.first = pushedNode;
            this.last = pushedNode;

        } else {
            pushedNode.next = this.first;
            this.first = pushedNode;
        }
        this.size++;
        return this.size;
    }
    pop() {
        if (this.size === 0) return null;
        let poppedNode = this.first;
        this.first = poppedNode.next;
        poppedNode.next = null;
        this.size--;
        if (this.size === 0) this.last = null;
        return poppedNode.val;
    }
}

let stack = new Queue();
queue.push(11);
// queue.push(12);
// queue.push(13);
// console.log(queue.push(14));
console.log(queue.pop());
console.log(queue);






// official solution