1. electron render process out of memory 出现时机？

2. electron 常见的阈值限制有哪些？

	渲染进程 512MB-1G，Chromium 默认值，可以改
	主进程  4G

3. 系统内存不足或别的软件内存占用过多会引起 render process gone oom ？
	会。

4. 假设系统内存还有 30% 可用，有可能出现上面问题吗？
	有可能。比如需要连续内存，操作系统和其他进程内存需求大

	内存泄漏： 每次注册 FFI 连接时，可能会分配一些内存资源。如果这些资源没有在不再需要时被正确释放，可能导致内存泄漏。长时间运行并重复注册 FFI 连接可能会导致内存占用不断增加。
	
	资源竞争：多个部分同时尝试注册和使用 FFI 连接，可能导致资源竞争和不确定的行为

	如何缓解？
	异步处理： 如果 FFI 操作涉及到长时间运行的任务，可以考虑使用异步方式处理，以避免阻塞主进程。
	缓存连接：如果可能，考虑缓存已经注册的 FFI 连接，而不是在每次需要时都重新注册。这可以减少注册的频率和相关资源开销。

5. 常见导致内存泄漏原因

## 案例

> EXCEPTION_ACCESS_VIOLATION_EXEC / 0x1: Fatal Error: EXCEPTION_ACCESS_VIOLATION_EXEC / 0x1

`EXCEPTION_ACCESS_VIOLATION_EXEC`是一种Windows平台上的致命错误，通常表示在应用程序中发生了内存访问违规。这种错误可能由多种原因引起，包括指针错误、内存溢出、访问已释放的内存等

1. **空或无效指针:**
    
    - 检查你的代码是否包含空指针或无效指针。
    - 确保不要对空指针或未初始化的指针进行解引用。
2. **缓冲区溢出:**
    
    - 检查你的代码是否存在缓冲区溢出，这可能导致内存访问违规。
    - 确保不要向缓冲区写入超过其分配大小的数据。
3. **内存泄漏:**

- 检查你的应用程序是否存在内存泄漏。内存泄漏可能导致意外行为和崩溃。
- 使用 Chrome DevTools 或其他内存分析工具来识别和修复泄漏。

应对：
- 静态代码分析
- 内存调试工具
- crashReporter 日志

https://netdiskstry.baidu.com/organizations/sentry/issues/94527/?project=3&referrer=release-issue-stream