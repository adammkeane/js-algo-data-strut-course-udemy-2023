// my solution
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(val => val !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(val => val !== v1);
    }
}


// official solution

let g = new Graph();
g.addVertex("Tokyo")
g.addVertex("Milan")
g.addVertex("Aspen")
g.addEdge("Tokyo", "Milan")
g.addEdge("Tokyo", "Aspen")
g.removeEdge("Tokyo", "Milan")
console.log(g)