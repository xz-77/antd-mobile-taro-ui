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
    items: [
      {
        title: 'CapsuleTabs 胶囊选项卡',
        desc: '交互不变，实现方式重写，暂时没有实现antd mobile的《ScrollMask 滚动两侧遮罩效果》，另外动画被替换使用微信小程序的ScrollView实现',
        url: '/pages/capsule-tabs/index',
      },
      {
        title: 'JumboTabs 复杂选项卡',
        desc: '交互不变，实现方式重写，暂时没有实现antd mobile的《ScrollMask 滚动两侧遮罩效果》，另外动画被替换使用微信小程序的ScrollView实现',
        url: '/pages/jumbo-tabs/index',
      },
      {
        title: 'Tabs 标签页',
        desc: '交互不变，实现方式重写，横线的交互动画稍为有点不同，暂时没有实现antd mobile的《ScrollMask 滚动两侧遮罩效果》，另外动画被替换使用微信小程序的ScrollView实现',
        url: '/pages/tabs/index',
      },
    ],
  },
  {
    name: '信息展示',
    items: [
      {
        title: 'Avatar 头像',
        desc: '不支持fit，支持fallback以及Taro的Image组件的其他API',
        url: '/pages/avatar/index',
      },
      {
        title: 'Card 卡片',
        desc: '',
        url: '/pages/card/index',
      },
      {
        title: 'List 列表',
        desc: 'antd-mobile的demo4和demo5不支持展示',
        url: '/pages/list/index',
      },
      {
        title: 'Steps 步骤条',
        desc: '',
        url: '/pages/steps/index',
      },
      {
        title: 'Tag 标签',
        desc: '',
        url: '/pages/tag/index',
      },
      {
        title: 'Footer 页脚',
        desc: '',
        url: '/pages/footer/index',
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
        title: 'Input 输入框',
        desc: '不支持onlyShowClearWhenFocus属性，支持Taro的Input部分属性',
        url: '/pages/input/index',
      },
      {
        title: 'SearchBar 搜索框',
        desc: '',
        url: '/pages/search-bar/index',
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
      {
        title: 'ProgressBar 进度条',
        desc: '',
        url: '/pages/progress-bar/index',
      },
    ],
  },
  {
    name: '引导提示',
    items: [
      {
        title: 'Badge 徽标',
        desc: '不支持color参数,请使用--color css变量',
        url: '/pages/badge/index',
      },
      {
        title: 'NoticeBar 通告栏',
        desc: '图标与antd-mobile稍稍不同',
        url: '/pages/notice-bar/index',
      },
    ],
  },
];
