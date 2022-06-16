import { View } from '@tarojs/components';
import React, { FC } from 'react';
import './index.less';

interface Props {
  title: string;
  padding?: string;
  background?: string;
  children?: React.ReactNode;
}

export const DemoBlock: FC<Props> = props => {
  return (
    <View className='demoBlock'>
      <View className='title'>{props.title}</View>
      <View
        className='main'
        style={{
          padding: props.padding,
          background: props.background,
        }}
      >
        {props.children}
      </View>
    </View>
  );
};

DemoBlock.defaultProps = {
  padding: '12px 12px',
  background: 'var(--adm-color-background)',
};
