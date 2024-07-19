class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// my solution
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let insertedNode = new Node(val);
        if (this.root === null) {
            this.root = insertedNode;
            return this;
        }
        let currentNode = this.root;
        while (true) {
            if (insertedNode.val < currentNode.val) {
                if (currentNode.left === null) {
                    currentNode.left = insertedNode; 
                    break;
                }
                currentNode = currentNode.left;
            } else {
                if (currentNode.right === null) {
                    currentNode.right = insertedNode;
                    break;
                }  
                currentNode = currentNode.right;
            }
        }
        return this;
    }
    find(val) {
        let currentNode = this.root;
        while (true) {
            if (val < currentNode.val) {
                if (currentNode.left === null) {
                    break;
                }
                currentNode = currentNode.left;
            } else if (val > currentNode.val) {
                if (currentNode.right === null) {
                    break;
                }  
                currentNode = currentNode.right;
            } else {
                return true;
            }
        }
        return false;
    }
}


let bst = new BinarySearchTree();
// bst.root = new Node(10);
// bst.root.right = new Node(15);
// bst.root.left = new Node(7);
// bst.root.left.right = new Node(9);
bst.insert(11);
bst.insert(12);
bst.insert(9);
console.log(bst.find(12));
// console.log(bst);

// official solution
class BinarySearchTreeOfficial {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}