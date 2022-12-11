import { Toast } from 'antd-mobile-taro-ui';

let REQUEST_NUM = 0;

export const increaseRequest = (mask = true) => {
  if (REQUEST_NUM >= 0) {
    Toast.show({
      icon: 'loading',
      content: '加载中…',
    });
  }
  REQUEST_NUM += 1;
};

export const reduceRequest = () => {
  REQUEST_NUM -= 1;
  if (REQUEST_NUM <= 0) {
    REQUEST_NUM = 0;
    Toast.clear();
  }
};

export const exportRequestNumber: () => number = () => REQUEST_NUM;
