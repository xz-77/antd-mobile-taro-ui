export const data = [
  {
    name: '通用',
    items: [
      {
        title: 'Button按钮',
        desc: '不支持type、onMouseDown、onMouseUp属性',
        url: '/pages/button/index',
      },
    ],
  },
  {
    name: '布局',
    items: [
      {
        title: 'AutoCenter 自动居中',
        desc: '',
        url: '/pages/auto-center/index',
      },
      {
        title: 'Divider 分割线',
        desc: '',
        url: '/pages/divider/index',
      },
      {
        title: 'Grid 栅格',
        desc: '由于number类型会被加上px单位，内部对 span 参数进行数据类型转化 number->string',
        url: '/pages/grid/index',
      },
      {
        title: 'SafeArea 安全区',
        desc: '',
        url: '/pages/safe-area/index',
      },
      {
        title: 'Space间距',
        desc: '',
        url: '/pages/space/index',
      },
    ],
  },
  {
    name: '导航',
    items: [],
  },
  {
    name: '信息展示',
    items: [
      {
        title: 'List列表',
        desc: 'antd-mobile的demo4和demo5不支持展示',
        url: '/pages/list/index',
      },
    ],
  },
  {
    name: '信息录入',
    items: [
      {
        title: 'Checkbox复选框',
        desc: '',
        url: '/pages/checkbox/index',
      },
      {
        title: 'Radio单选框',
        desc: '',
        url: '/pages/radio/index',
      },
    ],
  },
  {
    name: '反馈',
    items: [
      {
        title: 'DotLoading点状加载中',
        desc: '由于小程序不支持svg，这里使用css3动画，不支持自动适配字号',
        url: '/pages/dot-loading/index',
      },

      {
        title: 'Mask遮罩层',
        desc: '有修改精简实现方式，demo展示是一样的',
        url: '/pages/mask/index',
      },
      {
        title: 'Popup弹出层',
        desc: 'react-spring动画不能复用，使用transition实现动画',
        url: '/pages/popup/index',
      },
    ],
  },
];
