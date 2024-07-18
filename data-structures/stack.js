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
        if (this.size === 0) this.last = null;
        return poppedNode.val;
    }
}

let stack = new Stack();
stack.push(11);
// stack.push(12);
// stack.push(13);
// console.log(stack.push(14));
console.log(stack.pop());
console.log(stack);

// official solution
class StackOfficial {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}