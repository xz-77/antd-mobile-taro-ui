export default defineAppConfig({
  pages: ['pages/index/index'],
  subPackages: [
    {
      root: 'subpackages-common',
      pages: ['pages/index/index', 'pages/button/index', 'pages/iconfont/index'],
    },
    {
      root: 'subpackages-layout',
      pages: [
        'pages/index/index',
        'pages/auto-center/index',
        'pages/divider/index',
        'pages/grid/index',
        'pages/safe-area/index',
        'pages/space/index',
      ],
    },
    {
      root: 'subpackages-dataDisplay',
      pages: [
        'pages/index/index',
        'pages/avatar/index',
        'pages/card/index',
        'pages/footer/index',
        'pages/list/index',
        'pages/steps/index',
        'pages/tag/index',
        'pages/page-indicator/index',
      ],
    },
    {
      root: 'subpackages-dataEntry',
      pages: [
        'pages/index/index',
        'pages/checkbox/index',
        'pages/input/index',
        'pages/radio/index',
        'pages/search-bar/index',
        'pages/stepper/index',
      ],
    },
    {
      root: 'subpackages-feedback',
      pages: [
        'pages/index/index',
        'pages/dot-loading/index',
        'pages/mask/index',
        'pages/popup/index',
        'pages/progress-bar/index',
        'pages/progress-circle/index',
        'pages/result/index',
        'pages/toast/index',
      ],
    },
    {
      root: 'subpackages-guidance',
      pages: ['pages/index/index', 'pages/badge/index', 'pages/notice-bar/index'],
    },
    {
      root: 'subpackages-navigation',
      pages: ['pages/index/index', 'pages/capsule-tabs/index', 'pages/jumbo-tabs/index', 'pages/tabs/index'],
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
});
