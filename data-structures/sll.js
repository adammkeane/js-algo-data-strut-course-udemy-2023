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
    remove(index) {
        if (index < 0||index >= this.length) return undefined;
        if (index === this.length-1) return this.pop();
        if (index === 0) return this.shift();
        let removedNode = this.get(index);
        let prevNode = this.get(index-1);
        let nextNode = removedNode.next;
        prevNode.next = nextNode;
        this.length--;
        return removedNode;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail
        this.tail = node;
        let next = null;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

let list = new SinglyLinkedList();
list.push(12);
list.push(13);
list.push(14);
// list.push(15);
// list.push(16);
// list.push(17);
// list.push(18);
// console.log(list.push(32));
// console.log(list)
// console.log(list.pop())
// console.log(list.shift())
// console.log(list.unshift(2))
// console.log(list.get(2))
// console.log(list.set(0, 11))
// console.log(list.insert(4, 11))
// console.log(list.remove(2))
console.log(list.reverse())
// console.log(list.get(4))
console.log(list)

// official solution
class SinglyLinkedListOfficial{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse(){
      var node = this.head;
      this.head = this.tail;
      this.tail = node;
      var next;
      var prev = null;
      for(var i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
    }
    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}