# 压缩算法

Gzip 基于 DEFLATE 算法（重复序列），它是 LZ77 和霍夫曼编码（前缀编码）的组合

Brotli 有着更高的压缩效率。它通过变种的 LZ77 算法、Huffman 编码以及二阶文本建模等方式进行数据压缩。

## 霍夫曼 
> Huffman Coding

前缀编码

## LZ77

滑动窗口 （distance, length）

Huffman 编码是将出现次数多的编码尽可能的短来进行压缩，而 LZ77 则是另外一种思路：替换重复的内容。

## DEFLATE/ZIP

在一个文件中，如果有内容是相同的话，就可以在后一块内容中做一个标记，标示和前一块的距离和相同的长度（distance,length）。（distance,length）绝大多数情况下小于重复的内容，因此文件的体积就变小了。

ZIP 中，首先使用 LZ77 编码进行压缩，然后之后再对 LZ77 编码之后的结果继续进行压缩（Huffman 编码）,这个算法也叫做 Deflate 算法。

