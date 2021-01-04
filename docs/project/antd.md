# antd

## model

## form
在antd3中，某button的type为‘submit’时，会触发onSubmit方法，但是antd4取消了该方法，用onFinish代替。onFinish使用时与onSubmit大致一样，但是onFinish会在表单数据收集完之后自动调用一次。

antd4中去除了Form.create（）方法，使用时需要手动绑定一下。
