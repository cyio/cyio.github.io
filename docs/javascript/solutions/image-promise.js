// 手动实现图片异步加载

function imgPromise(url) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      reject(new Error('加载异常'))
    }
  })
}

imgPromise(url)
  .then(img => {
    document.body.appendChild(img)
  })
  .catch(err => {
    document.body.innerHTML = err
  })