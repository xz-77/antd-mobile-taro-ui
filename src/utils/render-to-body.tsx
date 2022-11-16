import { ReactElement } from 'react';
import Taro from '@tarojs/taro';
import { render, unmount as reactUnmount } from 'antd-mobile/es/utils/render';

export function renderToBody(element: ReactElement) {
  // const container = document.createElement('div')
  // document.body.appendChild(container)
  const container = document.createElement('view');
  const currentPages = Taro.getCurrentPages();
  const currentPage = currentPages[currentPages.length - 1];
  const path = currentPage.$taroPath;

  const pageElement = document.getElementById(path);
  render(element, container);
  pageElement?.appendChild(container);

  function unmount() {
    const unmountResult = reactUnmount(container);
    if (unmountResult && container.parentNode) {
      container.parentNode.removeChild(container);
    }
    // pageElement?.removeChild(container);
  }

  return unmount;
}
