import { Component } from 'react';
if (process.env.TARO_ENV === 'weapp') {
  import('./styles/index.less');
}
if (process.env.TARO_ENV === 'h5') {
  import('./styles/index.h5.less');
}
import './app.less';
import { updateVersion } from './utils/updateVersion';

class App extends Component {
  componentDidMount() {
    if (process.env.TARO_ENV === 'weapp') {
      updateVersion();
    }
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
