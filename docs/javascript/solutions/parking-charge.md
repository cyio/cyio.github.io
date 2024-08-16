# 停车场收费

阶段计费

```js
function calculateParkingFee(T, P1, P2, P3, N) {
    let fee = 0;
    
    for (let i = 1; i <= T; i++) {
        if (i === 1) {
            fee += P1;
        } else if (i <= N) {
            fee += P2;
        } else {
            fee += P3;
        }
    }
    
    return fee;
}
```