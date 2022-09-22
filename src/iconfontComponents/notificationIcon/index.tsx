import { View } from '@tarojs/components';
import React, { memo } from 'react';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';

const NotificationIcon = memo<NativeProps>(props => {
  return withNativeProps(props, <View className='icon iconfont icon-notification' />);
});

export default NotificationIcon;
