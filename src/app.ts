import { Component } from 'react';
import { isH5, isWeapp } from './utils/client';
if (isWeapp) {
  import('./styles/index.less');
}
if (isH5) {
  import('./styles/index.h5.less');
}
import './app.less';

import { updateVersion } from './utils/updateVersion';

class App extends Component {
  componentDidMount() {
    if (isWeapp) {
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
