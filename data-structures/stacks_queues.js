class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// my solution
class Stack {
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
        return poppedNode;
    }
}

let stack = new Stack();
stack.push(11);
stack.push(12);
stack.push(13);
console.log(stack.push(14));
console.log(stack.pop());
console.log(stack);






// official solution