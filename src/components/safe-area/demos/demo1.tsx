import React from 'react';
import { SafeArea } from 'antd-mobile-taro-ui';
import { lorem } from 'demos';
import { View } from '@tarojs/components';

export default () => {
  return (
    <View>
      <View style={{ background: '#ace0ff' }}>
        <SafeArea position='top' />
      </View>
      <View>{lorem.generateParagraphs(10)}</View>
      <View style={{ background: '#ffcfac' }}>
        <SafeArea position='bottom' />
      </View>
    </View>
  );
};
