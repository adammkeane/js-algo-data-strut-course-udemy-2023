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
        if (this.head === null){
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
        if (this.length === 0) return undefined;
        if (this.length === 1){
            let poppedNode = this.tail;
            this.head = null;
            this.tail = null;
            this.length--;
            return poppedNode;
        }
        if (this.length === 2){
            let poppedNode = this.tail;
            this.tail = this.head;
            this.length--;
            return poppedNode;
        }
        let currentNode = this.head;
        while (currentNode.next.next){
            currentNode = currentNode.next;
        }
        this.tail = currentNode;
        let poppedNode = currentNode.next;
        this.length--;
        return poppedNode;
    }
    shift() {
        if (this.length === 0) return undefined;
        let shiftedNode = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return shiftedNode;
    }
    unshift(val) {
        let unshiftedNode = new Node(val);
        if (this.length === 0) {
            this.tail = unshiftedNode;
        } else {
            unshiftedNode.next = this.head;
        }
        this.head = unshiftedNode;
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0||index > this.length-1) return null;
        let getNode = this.head;
        for (let i=1; i <= index; i++) {
            getNode = getNode.next; 
        }
        return getNode; 
    }
    set(index, val) {
        if (this.get(index)) {
            this.get(index).val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0||index > this.length) return false;
        if (index === this.length) {
            this.push(val);
            return true;
        }
        if (index === 0) {
            this.unshift(val);
            return true;
        }
        let insertedNode = new Node(val);
        let preNode = this.get(index-1);
        let postNode = this.get(index);
        preNode.next = insertedNode;
        insertedNode.next = postNode;
        this.length++;
        return true;
    }
}

let list = new SinglyLinkedList();
list.push(12);
list.push(13);
list.push(14);
// console.log(list.push(32));
// console.log(list)
// console.log(list.pop())
// console.log(list.shift())
// console.log(list.unshift(2))
// console.log(list.get(0))
// console.log(list.set(0, 11))
console.log(list.insert(4, 11))
console.log(list)

// official solution
