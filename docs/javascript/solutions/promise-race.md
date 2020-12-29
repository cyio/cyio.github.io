# promise.race

```js
  const promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 500, 'one');
  }
  );

  const promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 100, 'two');
  }
  );

  // 注意不能这么写 Promise.prototype.myRace
  // Promise.then undefined
  Promise.myRace = function(arr){
    return new Promise((resolve, reject) => {
      arr.forEach(item => {
        item.then(resolve, reject)
      })
    })
  }
  console.log(Promise.myRace)

  Promise.myRace([promise1, promise2]).then((value)=>{
    console.log(value);
    // Both resolve, but promise2 is faster
  }
  );
  // expected output: "two"
```
