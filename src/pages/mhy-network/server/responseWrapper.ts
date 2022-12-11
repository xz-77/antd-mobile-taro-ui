import { Toast } from 'antd-mobile-taro-ui';
import { GenericData } from './genericData';
import { exportRequestNumber } from './loading';

const messageQueue: Set<string> = new Set();

export const CANCEL_MESSAGE = 'chanel';

export const responseWrapper = <T>(res: Promise<GenericData<T>>): Promise<GenericData<T>> =>
  res
    .then(response => Promise.resolve(response))
    .catch(err => {
      const message = err?.message;
      const num = exportRequestNumber(); // 获取loading计数器的数量
      if (![CANCEL_MESSAGE].includes(message)) {
        // 过滤 cancel 消息
        messageQueue.add(message);
      }
      if (num === 0 && messageQueue.size > 0) {
        showToastFn();
      }
      return Promise.resolve(err);
    });

const showToastFn = () => {
  const message = [...messageQueue][0];
  // showToast({ title: message, icon: 'none' });
  Toast.show({
    content: message,
  });
  messageQueue.delete(message);
  if (messageQueue.size !== 0) {
    setTimeout(showToastFn, 1500);
  }
};
