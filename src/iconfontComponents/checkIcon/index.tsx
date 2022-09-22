import { View } from '@tarojs/components';
import React, { memo } from 'react';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';

const CheckIcon = memo<NativeProps>(props => {
  return withNativeProps(props, <View className='icon iconfont icon-check' />);
});

export default CheckIcon;
