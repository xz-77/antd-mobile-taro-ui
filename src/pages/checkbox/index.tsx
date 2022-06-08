import { View } from '@tarojs/components';
import React from 'react';
import Checkbox from '@/components/checkbox';

export default () => {
  return (
    <View>
      <Checkbox defaultChecked>默认选中</Checkbox>
      <Checkbox block>块级元素</Checkbox>
      <Checkbox>非块级元素</Checkbox>
    </View>
  );
};
