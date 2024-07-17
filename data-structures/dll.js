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
    pop() {
        if (!this.head) return undefined;
        let currentTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let newTail = currentTail.prev;
            this.tail = newTail;
            newTail.next = null;
            currentTail.prev = null;
        }
        this.length--;
        return currentTail;
    }
    shift() {
        if (!this.head) return undefined;
        let shiftedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        shiftedNode.next = null;
        this.length--;
        return shiftedNode;
    }
    unshift(val) {
        let unshiftedNode = new Node(val);
        if (this.length === 0) {
            this.head = unshiftedNode;
            this.tail = unshiftedNode;
        } else {
            unshiftedNode.next = this.head;
            this.head.prev = unshiftedNode;
            this.head = unshiftedNode;
        }
        this.length++;
        return unshiftedNode;
    }
    get(idx) {
        if (idx >= this.length|| idx < 0) return null;
        let half = Math.floor(this.length/2);
        let gotNode;
        if (idx <= half) {
            gotNode = this.head;
            for (let i = 0; i < idx; i++) {
                gotNode = gotNode.next;
            }
        } else {
            gotNode = this.tail;
            for (let i = this.length-1; i > idx; i--) {
                gotNode = gotNode.prev;
            }   
        }
        return gotNode;
    }
}

let list = new DoublyLinkedList();
list.push(12);
list.push(13);
list.push(14);
list.push(15);
list.push(16);
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.unshift(11));
console.log(list.get(3));
console.log(list)

// official solution