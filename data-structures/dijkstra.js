// my solution
class PriorityQueueSlow {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

// improved priority, using binary heap for quicker sorting.
// Also makes use of a node class, which we defined after
class PriorityQueue {
  constructor(){
      this.values = [];
  }
  enqueue(val, priority){
      let newNode = new Node(val, priority);
      this.values.push(newNode);
      this.bubbleUp();
  }
  bubbleUp(){
      let idx = this.values.length - 1;
      const element = this.values[idx];
      while(idx > 0){
          let parentIdx = Math.floor((idx - 1)/2);
          let parent = this.values[parentIdx];
          if(element.priority >= parent.priority) break;
          this.values[parentIdx] = element;
          this.values[idx] = parent;
          idx = parentIdx;
      }
  }
  dequeue(){
      const min = this.values[0];
      const end = this.values.pop();
      if(this.values.length > 0){
          this.values[0] = end;
          this.sinkDown();
      }
      return min;
  }
  sinkDown(){
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while(true){
          let leftChildIdx = 2 * idx + 1;
          let rightChildIdx = 2 * idx + 2;
          let leftChild,rightChild;
          let swap = null;

          if(leftChildIdx < length){
              leftChild = this.values[leftChildIdx];
              if(leftChild.priority < element.priority) {
                  swap = leftChildIdx;
              }
          }
          if(rightChildIdx < length){
              rightChild = this.values[rightChildIdx];
              if(
                  (swap === null && rightChild.priority < element.priority) || 
                  (swap !== null && rightChild.priority < leftChild.priority)
              ) {
                 swap = rightChildIdx;
              }
          }
          if(swap === null) break;
          this.values[idx] = this.values[swap];
          this.values[swap] = element;
          idx = swap;
      }
  }
}

class Node {
  constructor(val, priority){
      this.val = val;
      this.priority = priority;
  }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({node: v2, weight});
        this.adjacencyList[v2].push({node: v1, weight});
    }
    dijk(startV, endV) {
      let distances = {};
      let pQ = new PriorityQueue();
      let previous = {};
      
      // to have array to return shortest node path from startV to endV
      let path = [];

      for (let vertex in this.adjacencyList) {
        if (vertex === startV) {
          distances[vertex] = 0;
          pQ.enqueue(vertex, 0);
        } else {
          distances[vertex] = Infinity;
          // i don't see why you need to add each vertex to pQ, as they will be added below.
          // pQ.enqueue(vertex, Infinity);
        }
        previous[vertex] = null;
      }

      while (pQ.values.length > 0) {
        let currentV = pQ.dequeue();
        
        // if we've reached the endV, we build our path and break out of the while loop.
        if (currentV.val === endV) {
          path.unshift(endV);
          while (previous[currentV.val] !== startV) {
            path.unshift(previous[currentV.val]);
            currentV.val = previous[currentV.val];
          }
          path.unshift(startV);
          break; 
        }
        
        for (let el of this.adjacencyList[currentV.val]) {
          let length = null;
          length = el.weight + distances[currentV.val];
          if (length < distances[el.node]) {
            distances[el.node] = length;
            previous[el.node] = currentV.val;
            pQ.enqueue(el.node, length)
          } 
          // console.log(distances)
          // console.log(previous)
          // console.log(pQ)
        }
      }
      return path;
    }
}



let wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");

wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("B", "E", 3);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "E", 3);
wg.addEdge("D", "F", 1);
wg.addEdge("F", "E", 1);

// console.log(wg.adjacencyList)


console.log(wg.dijk("A", "E"))


// official solution
// uses same priority queue and node class as in my solution
class WeightedGraphOfficial {
  constructor() {
      this.adjacencyList = {};
  }
  addVertex(vertex){
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1,vertex2, weight){
      this.adjacencyList[vertex1].push({node:vertex2,weight});
      this.adjacencyList[vertex2].push({node:vertex1, weight});
  }
  Dijkstra(start, finish){
      const nodes = new PriorityQueue();
      const distances = {};
      const previous = {};
      let path = [] //to return at end
      let smallest;
      //build up initial state
      for(let vertex in this.adjacencyList){
          if(vertex === start){
              distances[vertex] = 0;
              nodes.enqueue(vertex, 0);
          } else {
              distances[vertex] = Infinity;
              nodes.enqueue(vertex, Infinity);
          }
          previous[vertex] = null;
      }
      // as long as there is something to visit
      while(nodes.values.length){
          smallest = nodes.dequeue().val;
          if(smallest === finish){
              //WE ARE DONE
              //BUILD UP PATH TO RETURN AT END
              while(previous[smallest]){
                  path.push(smallest);
                  smallest = previous[smallest];
              }
              break;
          } 
          if(smallest || distances[smallest] !== Infinity){
              for(let neighbor in this.adjacencyList[smallest]){
                  //find neighboring node
                  let nextNode = this.adjacencyList[smallest][neighbor];
                  //calculate new distance to neighboring node
                  let candidate = distances[smallest] + nextNode.weight;
                  let nextNeighbor = nextNode.node;
                  if(candidate < distances[nextNeighbor]){
                      //updating new smallest distance to neighbor
                      distances[nextNeighbor] = candidate;
                      //updating previous - How we got to neighbor
                      previous[nextNeighbor] = smallest;
                      //enqueue in priority queue with new priority
                      nodes.enqueue(nextNeighbor, candidate);
                  }
              }
          }
      }
      return path.concat(smallest).reverse();     
  }
}

// var graph = new WeightedGraphOfficial()
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addVertex("F");

// graph.addEdge("A","B", 4);
// graph.addEdge("A","C", 2);
// graph.addEdge("B","E", 3);
// graph.addEdge("C","D", 2);
// graph.addEdge("C","F", 4);
// graph.addEdge("D","E", 3);
// graph.addEdge("D","F", 1);
// graph.addEdge("E","F", 1);


// graph.Dijkstra("A", "E");
