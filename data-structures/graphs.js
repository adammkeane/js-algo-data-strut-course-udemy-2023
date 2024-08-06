// my solution
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(str) {
        this.adjacencyList[str] = [];
    }
}


// official solution

let g = new Graph();
g.addVertex("Tokyo")
g.addVertex("Milan")
console.log(g)