import { View } from '@tarojs/components';
import React, { FC, ReactNode } from 'react';

export const DemoDescription: FC<{
  content?: ReactNode;
  children?: ReactNode;
}> = props => {
  return <View className='demoDescription'>{props.content || props.children}</View>;
};
