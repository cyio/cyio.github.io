# solidity

Solidity by Example | 0.8.13 https://solidity-by-example.org/

https://learn.cyio.repl.co/


提供者、签名者

通过 Ethers 或 Web3js 降低与区块链交互复杂度

https://faucet.egorfine.com/  获取测试币，要等半个小时

## 基础数据类型：
* boolean
* uint 非负整数
* int 整数
* address

## 变量：
- 全局：提供区块链信息
- 本地：函数内，不上链
- state 状态： 上链

循环较少用，可能消耗完 Gas，导致交易失败

数组删除元素，有两种，删除当前元素，循环后面元素全部前移一位。或者将尾部元素置换到当前位置。最后都需要将尾元素 pop。

## enum 枚举声明

## 函数

view 只读 state

pure 不操作也不读 state

## 存储位置
Storage 链上
Memory 程序运行中
Calldata 有入参的函数

## 前端库

react wagmi 
vue
https://github.com/wobsoriano/vagmi

## remix 示例

owner.sol 判断是否是合约部署者，更改拥有者


