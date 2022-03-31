# wechat-taro-ui

## components

核心：基于Taro框架尽最大可能与Ant Design Mobile 5.0的api保持100%一致，总体代码70%以上会直接复制Ant Design Mobile大佬们写的源码，剩余的不到30%主要还是为了适配微信小程序(多多学习Ant Design Mobile开发者大佬们写的代码)

个人观点：站在巨人的肩膀上，才能造出高质量的轮子

正在适配的组件
checkbox
list
mask
popup
radio
space

## 图表 ec-canvas

拷贝的是echarts-for-weixin的代码，但是Taro3.4.3有bug，进行了修改

目录：/src/charts/ec-canvas 文件夹整体拷贝 然后按照混合开发模式 就可以使用echarts的图表了

参考网站：
[echarts-for-weixin](https://github.com/ecomfe/echarts-for-weixin)
[echarts](https://echarts.apache.org/zh/index.html)
