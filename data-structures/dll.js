class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// my solution
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let pushedNode = new Node(val);
        if (!this.head) {
            this.head = pushedNode;
            this.tail = pushedNode;
        } else {
            this.tail.next = pushedNode;
            pushedNode.prev = this.tail;
            this.tail = pushedNode;
        }
        this.length++;
        return this;
    }
}

let list = new DoublyLinkedList();
list.push(12);
list.push(13);
// list.push(14);
// console.log(list.push(32));
console.log(list)

// official solution