
深度优先搜索（DFS）是一种用于遍历或搜索树、图或其他数据结构的算法。它以递归或栈的方式进行遍历，从起始节点（或根节点）开始，尽可能深入到树的一个分支，直到无法再深入为止，然后回溯到上一个节点，再探索其他分支。

在纸上画个树，好理解些

```js
function findPath(graph, startNode, endNode) {
    // 创建一个空数组来存储路径
    const path = [];
  
    // 创建一个辅助函数来进行DFS
    function dfs(currentNode) {
      // 将当前节点添加到路径中
      path.push(currentNode);
  
      // 如果当前节点就是目标节点，返回路径
      if (currentNode === endNode) {
        return path;
      }
  
      // 遍历当前节点的邻居节点
      for (const neighbor of graph[currentNode]) {
        // 如果邻居节点不在路径中，继续DFS，有可能循环指向
        if (!path.includes(neighbor)) {
          const result = dfs(neighbor);
          // 如果找到路径，返回结果
          if (result) {
            return result;
          }
        }
      }
  
      // 如果当前节点没有通向目标节点的路径，从路径中删除它
      path.pop();
    }
  
    // 调用DFS函数，开始搜索
    dfs(startNode);
  
    // 返回找到的路径，如果没有路径则返回 null
    return path.length > 1 ? path : null;
  }
  
  // 示例输入
  const graph = {
    "A": ["B", "C"],
    "B": ["D"],
    "C": ["E"],
    "D": ["E"],
    "E": []
  };
  const startNode = "A";
  const endNode = "E";
  
  // 查找路径
  const path = findPath(graph, startNode, endNode);
  
  if (path) {
    console.log("路径:", path.join(" -> "));
  } else {
    console.log("没有找到路径");
  }
  
```