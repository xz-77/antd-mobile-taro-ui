import { Component } from 'react';
import './styles/miniprogram/theme-default.less';
import './styles/h5/theme-default.less';
// TODO: 兼容h5不引入iconfont样式文件问题
import 'antd-mobile-taro-icons/lib/es/styles/iconfont.css';
import './app.less';

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
