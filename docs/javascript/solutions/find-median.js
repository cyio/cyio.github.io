function find(arr) {
  if (arr.length % 2 === 0) {
    let pos = arr.length / 2
    return (arr[pos] + arr[pos - 1]) / 2
  } else {
    return arr[Math.floor(arr.length / 2)]
  }
}


console.log(find([1,2,3]))
console.log(find([1,2,3,4]))