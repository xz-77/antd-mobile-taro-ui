export const data = [
  {
    name: '反馈',
    items: [
      {
        title: 'DotLoading点状加载中',
        desc: '由于小程序不支持svg，这里使用css3动画，不支持自动适配字号',
        url: '/subpackages-feedback/pages/dot-loading/index',
      },

      {
        title: 'Mask遮罩层',
        desc: '有修改精简实现方式，demo展示是一样的',
        url: '/subpackages-feedback/pages/mask/index',
      },
      {
        title: 'Popup弹出层',
        desc: 'react-spring动画不能复用，使用transition实现动画',
        url: '/subpackages-feedback/pages/popup/index',
      },
      {
        title: 'ProgressBar 进度条',
        desc: '',
        url: '/subpackages-feedback/pages/progress-bar/index',
      },
      {
        title: 'ProgressCircle 进度圈',
        desc: '使用css3替换svg实现，API保持不变',
        url: '/subpackages-feedback/pages/progress-circle/index',
      },
      {
        title: 'Toast 轻提示',
        desc: 'Taro不支持Portal，相关部分重写实现，部分属性暂不支持',
        url: '/subpackages-feedback/pages/toast/index',
      },
    ],
  },
];
