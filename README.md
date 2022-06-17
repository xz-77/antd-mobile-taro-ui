# `antd-mobile-taro-ui`指南

## 核心思路

- 基于 `Taro` 框架以 `antd-mobile` 的设计为标准
- 尽最大可能与 `Ant Design Mobile 5.x` 的 api 保持 100%一致
- 预计总体代码 75%会使用 `Ant Design Mobile` 的源码，25%处理小程序带来的兼容问题

## 想法

组件 API 的设计本身就是一件公说公有理，婆说婆有理的一件事情，而[antd-mobile](https://mobile.ant.design/zh)相对来说有很大的使用用户，[下载量](https://www.npmjs.com/package/antd-mobile)每周都十分可观，尤其是在 5.x 版本之后整个库的设计和源码质量都十分具有值得学习的地方，我自己也从中学到了很多代码的实现方式，但是这么好的东西目前只能应用于 h5 觉得有点太过于暴殄天物，所以我的想法是结合[Taro 框架](https://taro-docs.jd.com/taro/docs/)和[antd-mobile](https://mobile.ant.design/zh)进行结合，以`antd-mobile`为设计标准做一个小程序的组件库

站在巨人的肩膀上，造出高质量的轮子

## 遇到的问题

由于[dumi](https://d.umijs.org/zh-CN)的`dumi-theme-mobile`展示暂时还不支持`Taro`框架，目前的解决方案是使用`demoUrl`，[antd-mobile-taro-ui](https://github.com/xz-77/antd-mobile-taro-ui)有一个`lerna`分支，希望可以探讨一下是否可以使用`monorepo`的方式[monorepo-docs](https://github.com/xz-77/antd-mobile-taro-ui/tree/monorepo-docs)

由于`dumi-theme-mobile`中展示的是`Taro`进行`h5`打包后的效果，所以与**小程序**对比会有一些细微的差别 **(影响不大，又不是不能看 🐶)**，这边会尽量做到展示的一致

如果有更好的方式实现，希望可以一起进行探讨 🙏

## 最最重要的一点

**如侵，删**

## 非常感谢

非常非常非常感谢[antd-mobile](https://mobile.ant.design/zh)，让我拥有学习技术和做这件事的机会 🙇

## 进度展示和兼容情况

_由于小程序不支持 SVG 所以 antd 所有用到 svg 图片的地方这里会使用 css3 动画或者图片的解决方案，后期计划一部分用 iconfont 替代_

| `components` | `name`     | `state` | `difference`                                                                           |
| ------------ | ---------- | ------- | -------------------------------------------------------------------------------------- |
| `Checkbox`   | 复选框     | `done`  | -                                                                                      |
| `Radio`      | 单选框     | `done`  | -                                                                                      |
| `Space`      | 间距       | `done`  | -                                                                                      |
| `DotLoading` | 点状加载中 | `done`  | 由于小程序不支持 svg，这里使用 css3 动画，动画与 antd 表现一致，但是不支持自动适配字号 |
| `Button`     | 按钮       | `done`  | 不支持 type、onMouseDown、onMouseUp 属性                                               |
| `List`       | 列表       | `done`  | antd-mobile 的 demo4 和 demo5 不支持展示                                               |
| `Mask`       | 遮罩层     | `done`  | 有修改精简实现方式，demo 展示是一样的                                                  |
| `Popup`      | 弹出层     | `done`  | react-spring 动画不能复用，使用 transition 实现动画                                    |
