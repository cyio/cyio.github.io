
# slimv
新建.lisp文件
,s 打开服务
,d 运行表达式
需要应答时，进入插入模式

函数是第一位的，默认当作函数，要表示列表必须引用
con car cdr 都是非破坏性的，即不改变原列表
car 的有意义名字是 first，而 cdr 对应的是 rest
词被称为原子，意为不可分割，而列表是可以分割的
空列表也被视为原子
符号表达示，简称表达式，有时也叫 form
双引号括住的文本整体被视为一个原子，具体类型是字符串
函数调用时的传参是没有括号的
nil既表示空表，也表示假（与t对应）
(not nil), (null nil) 返回都为真
非nil即视为真
if函数的最后一个实参也就是else表达示，是可选的
and函数，所有实参为真时，返回最后一个实参的值，否则返回nil
把递归看成规则，过程
多个表达式，只有最后一个表达式有返回