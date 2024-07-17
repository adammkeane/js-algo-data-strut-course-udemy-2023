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
    set(idx, val) {
        let nodeToSet = this.get(idx);
        if (nodeToSet) {
            nodeToSet.val = val;
            return true;
        }
        return false;
    }
    insert(idx, val) {
        if (idx > this.length|| idx < 0) return false;
        if (idx === 0) return !!this.unshift(val);
        if (idx === this.length) return !!this.push(val);
        let insertedNode = new Node(val);
        let prevNode = this.get(idx-1);
        let nextNode = this.get(idx);
        prevNode.next = insertedNode;
        nextNode.prev= insertedNode;
        insertedNode.prev = prevNode;
        insertedNode.next= nextNode;
        this.length++;
        return true;
    }
    remove(idx) {
        if (idx >= this.length|| idx < 0) return undefined;
        if (idx === 0) return this.shift();
        if (idx === this.length-1) return this.pop();

        let removedNode = this.get(idx);
        let prevNode = removedNode.prev;
        let nextNode = removedNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        removedNode.prev = null;
        removedNode.next = null;

        this.length--;
        return removedNode;
    }
    reverse() {
        let current = this.head;
        let tail = this.tail;
        for (let i = 0; i < this.length; i++) {
            let nextNode = current.next;
            current.next = current.prev;
            current.prev = nextNode;
            if (current = tail) {
                tail = current;
            }
            current = nextNode;      
            if (current === null) {
                this.tail = this.head;
                this.head = tail;
            }
        }
        return this;
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
// console.log(list.get(3));
// console.log(list.set(1,11));
// console.log(list.insert(5,11));
// console.log(list.remove(1));
console.log(list.reverse());
// console.log(list.get(2));
// console.log(list)

// official solution