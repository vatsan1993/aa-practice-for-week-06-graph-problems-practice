function getNeighbors(row, col, graph) {
  let result = [];
  // Up
  if (row - 1 >= 0) {
    if (graph[row - 1][col] === 1) {
      let up = [row - 1, col];
      result.push(up);
    }
  }
  // Down
  if (row + 1 <= graph.length - 1) {
    if (graph[row + 1][col] === 1) {
      let down = [row + 1, col];
      result.push(down);
    }
  }
  // Left
  if (col - 1 >= 0) {
    if (graph[row][col - 1] === 1) {
      let left = [row, col - 1];
      result.push(left);
    }
  }
  // Right
  if (col + 1 <= graph[0].length - 1) {
    if (graph[row][col + 1] === 1) {
      let right = [row, col + 1];
      result.push(right);
    }
  }

  // Your code here
  return result;
}

function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  let visited = new Set();
  // Create a stack, put the starting node in the stack
  let stack = [[row, col]];
  // Put the stringified starting node in visited
  visited.add([row, col].toString());
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while (stack.length !== 0) {
    // Pop the first node
    let node = stack.pop();
    // DO THE THING (increment size by 1)
    size++;
    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
    row = node[0];
    col = node[1];
    let neighbors = getNeighbors(row, col, graph);
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor.toString())) {
        stack.push(neighbor);
        visited.add(neighbor.toString());
      }
    }
  }
  // return size
  return size;
  // Your code here
}

module.exports = [getNeighbors, islandSize];
