# 停车场收费

你需要设计一个函数来计算车辆在停车场的停车费用。收费标准如下：

1. 前2小时每小时收费10元；
2. 接下来4小时每小时收费7元；
3. 超过6小时的部分，每小时收费5元。

函数输入为两个参数：停车的起始时间和结束时间。输出为停车的总费用。

考察：
- 简单数学计算
- 转换代码能力
- 边界考虑，比如不足 1h
- 扩展性
- 不同参数要求

简版
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


进阶
遍历累加，时间 O(n)
```js
// 前2小时每小时收费10元；
// 接下来4小时每小时收费7元；
// 超过6小时的部分，每小时收费5元。

function calculateParkingFee(S, E) {
    let fee = 0;
    let diff = +E - +S
    // console.log('debug', diff / (1000 * 60 * 60))
    let diffHour = Math.ceil(diff / (1000 * 60 * 60))
    const P1 = 10
    const P2 = 7
    const P3 = 5
    
    for (let i = 1; i <= diffHour; i++) {
        if (i <= 2) {
            fee += P1;
        } else if (i <= 6) {
            fee += P2;
        } else {
            fee += P3;
        }
    }
    
    console.log(fee)
    return fee;
}

calculateParkingFee(new Date('2024/07/06 01:24:00'), new Date('2024/07/06 02:59:00'))
```

使用公式分段计算
O(1)
```js
function calculateParkingFee(S, E) {
    let diff = +E - +S;
    let oneHour = 1000 * 60 * 60;
    let diffHour = Math.ceil(diff / oneHour);

    const P1 = 10;
    const P2 = 7;
    const P3 = 5;
    
    let fee = 0;

    if (diffHour <= 2) {
        fee = diffHour * P1;
    } else if (diffHour <= 6) {
        fee = 2 * P1 + (diffHour - 2) * P2;
    } else {
        fee = 2 * P1 + 4 * P2 + (diffHour - 6) * P3;
    }

    console.log(fee);
    return fee;
}

```