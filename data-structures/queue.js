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
    dequeue() {
        if (this.size === 0) return null;
        let dequeuedNode = this.first;
        dequeuedNode.next = null;
        this.first = this.first.next;
        this.size--;
        if (this.size === 0) this.last = null;
        return dequeuedNode.val;
    }
}

let queue = new Queue();
queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(13);
// console.log(queue.enqueue(14));
console.log(queue.dequeue());
console.log(queue);

// official solution
class QueueOfficial {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}