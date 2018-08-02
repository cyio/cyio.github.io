# 数据结构

* 递归、极限
数学归纳法是使用递归来完成一个数学证明，而递归又广泛地用于计算理论和算法中。递归不仅仅是程序和算法的一种机制，递归的思想也是思考和表示某些问题的一种简洁的优雅的方式，如树和图的遍历。还有，算法时间复杂度和空间复杂度的分析思想来源于数学的极限的概念，表示的是算法时间和空间的花销随着输入规模增长的快慢程度。
* 算法中包含了很多解决问题的思想和技巧
对于计算机软件而言，难题之所以是难题，常常是没有理解问题中隐含的数学概念和数学关系，一旦这些最本质的东西把握住了，就可以举重若轻地实现巧妙的突破。
抽象的模型要求简单、清晰和无歧义。这正是数学语言特有的优点，所以数学语言是最适合建模的语言

[数学的奉献，架构的韵脚 | LinkedIn](https://www.linkedin.com/pulse/%25E5%2590%25B9%25E5%258B%2592%25E4%25B8%25AA%25E7%2589%259B%25E8%25BD%25AF%25E4%25BB%25B6%25E6%259E%25B6%25E6%259E%2584%25E7%259A%2584%25E9%259F%25B5%25E8%2584%259A%25E6%2598%25AF%25E6%2595%25B0%25E5%25AD%25A6-yanmin-jia/)

## 快排

## 冒泡

## 处理二维数组，两层嵌套循环，外循环处理行，内循环处理列（可以反转）
  ```js
  var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];

  var total = 0
  var average = 0.0

  for (var row = 0; row < grades.length; row++) {
    // 总分 遍历累加
    for (var col = 0; col < grades[row].length; col++) {
      total = total + grades[row][col]
    }
    // 均分 总分/科数
    average = (total/grades[row].length).toFixed(2)
    console.log('student ' + 'average: ' + average)
    // 重置
    total = 0
    average = 0.0
  }
  ```

## 递归解决数据按序请求问题
  ```js
  var ids = [34112, 98325, 68125];
  (function sendRequest(){
    var id = ids.shift();
    if(id){
      $.ajax({url: "/get", data: {id}}).always(function(){
        //do sth.
        console.log("finished");
        sendRequest();
      });
    } else {
      console.log("finished");
    }
  })(); 
  ```
[我接触过的前端数据结构与算法-前端开发博客](http://caibaojian.com/data-structures-and-algorithms.html)

## 链表
线性集合，不按照元素的物理顺序排列，而是每个元素有指向，高效插入和移除通过遍历
JS 中数组效率低，除了随机访问，都可以用链表替换一维数组
定义：节点集合，每个节点使用对象引用指向其后继，这个引用叫做链
插入和删除操作展示出高效率，因为只是调整引用指向
缺点是访问慢（如随机）
