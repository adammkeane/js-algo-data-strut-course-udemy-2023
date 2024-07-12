class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// my solution
class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    } 
    push(val) {
        let pushedNode = new Node(val);
        if (this.head === null) {
            this.head = pushedNode;
            this.tail = pushedNode;
        } else {
            this.tail.next = pushedNode;
            this.tail = pushedNode;
        }
        this.length++;
        return this
    }
    pop() {
        let poppedNode;
        return poppedNode;
    }
}

let list = new SinglyLinkedList();
list.push(12);
// console.log(list.push(32));
console.log(list.pop())

// official solution