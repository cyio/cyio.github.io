
## 交易构成

不是我们常见的一个地址对一个地址
输入输出可能是多个地址

如果一个输入地址的余额不够花费，就会查找其它地址的余额，类似我们拼凑零钱
如果大于花费，就会发生找零

> 交易的输出会被创建成为一个包含这笔数额的脚本的形式，只能被引入这个脚本的一个解答后才能兑换。
> 这个解答就是交易接收方的钱包提供的签名

非对称加密，解起来困难而验证很容易，且难度可调整

一笔交易大小一般不超过 1KB ，多数在 1/4 KB，可结合网站最佳手续费推算

## 循环

比特币没有流控制，比如循环，避免了被用来 DDoS 攻击，只能用于线性任务，而不是一些自动化任务
以太坊通过内建图灵完备语言 Solidity 解决，也因此出事故

[gent-Based-Turing-Complete-Transactions-PCT-Application-as-filed](https://nchain.com/app/uploads/2017/08/Agent-Based-Turing-Complete-Transactions-PCT-Application-as-filed.pdf)