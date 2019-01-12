# Mock

* 代码容易分解和合成
* 纯函数
    - 给定相同输入，总是返回相同输出
    - 无副作用
* 松耦合
[Mocking is a Code Smell – JavaScript Scene – Medium](https://medium.com/javascript-scene/mocking-is-a-code-smell-944a70c90a6a)

## 方案
* json 文件，开发阶段适用
    1. page.js 页面文件
    ```js
    import axios from 'axios';
    import MockAdapter from 'axios-mock-adapter';

    // 辅助库
    // import dayjs from 'dayjs';
    // import Mock from 'mockjs';

    // 配置和数据
    import config from '@/config';
    import res from './exam-intro.json'

    const mock = new MockAdapter(axios)
    const { baseUrl } = config;

    // 具体规则
    mock.onGet(`${baseUrl}/api/course/getExaminationById?examId=1`).reply(200, res);
    ```
    2. request.js 请求封装文件
    ```js
    import '../mock/exam-intro' // eslint-disable-line
    ```

