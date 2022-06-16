# antd-mobile-taro-ui

## components

核心：基于 Taro 框架以 antd-mobile 的设计为标准，尽最大可能与 Ant Design Mobile 5.13.1 的 api 保持 100%一致，目前来看总体代码 75%以上会直接复制 Ant Design Mobile 大佬们的源码，剩余的 25%主要还是为了适配小程序(多多学习 Ant Design Mobile 开发者大佬们写的代码)

站在巨人的肩膀上，造出高质量的轮子

## 进度展示和兼容情况

_由于小程序不支持 SVG 所以 antd 所有用到 svg 图片的地方会使用 css3 动画或者图片处理_

| `components` | `name`     | `state` | `difference`                                                                             |
| ------------ | ---------- | ------- | ---------------------------------------------------------------------------------------- |
| `Checkbox`   | 复选框     | `done`  | -                                                                                        |
| `Radio`      | 单选框     | `done`  | -                                                                                        |
| `Space`      | 间距       | `done`  | -                                                                                        |
| `DotLoading` | 点状加载中 | `done`  | 由于小程序不支持 svg，这里使用 css3 动画，动画与 antd 表现一致，区别是不支持自动适配字号 |
| `Button`     | 按钮       | `done`  | 不支持 type、onMouseDown、onMouseUp 属性                                                 |
| `List`       | 列表       | `done`  | antd-mobile 的 demo4 和 demo5 不支持展示                                                 |
| `Mask`       | 遮罩层     | `done`  | 有修改精简实现方式，demo 展示是一样的                                                    |
| `Popup`      | 弹出层     | `done`  | react-spring 动画不能复用，使用 transition 实现动画                                      |
