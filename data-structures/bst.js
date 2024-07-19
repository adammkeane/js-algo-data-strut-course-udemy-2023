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
}


let bst = new BinarySearchTree();
// bst.root = new Node(10);
// bst.root.right = new Node(15);
// bst.root.left = new Node(7);
// bst.root.left.right = new Node(9);
console.log(bst.insert(11));
console.log(bst.insert(12));
console.log(bst.insert(9));
// console.log(bst);

// official solution