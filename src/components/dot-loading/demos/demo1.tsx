import { Text, View } from '@tarojs/components';
import { DotLoading } from 'antd-mobile';
import { DemoBlock } from 'demos';
import React from 'react';

export default () => {
  return (
    <>
      <DemoBlock title='默认'>
        <DotLoading />
      </DemoBlock>

      <DemoBlock title='主题色 Loading'>
        <DotLoading color='primary' />
      </DemoBlock>

      <DemoBlock title='白色 Loading' background='#a5a5a5'>
        <DotLoading color='white' />
      </DemoBlock>

      {/* <DemoBlock title='自动适配字号'>
        <View style={{ fontSize: 14 }}>
          <DotLoading />
        </View>
        <View style={{ fontSize: 18 }}>
          <DotLoading />
        </View>
        <View style={{ fontSize: 24 }}>
          <DotLoading />
        </View>
      </DemoBlock> */}

      <DemoBlock title='自动适配文本颜色'>
        <View style={{ color: '#00b578' }}>
          <DotLoading color='currentColor' />
          <Text>绿色文字</Text>
        </View>
        <View style={{ color: '#ff3141' }}>
          <DotLoading color='currentColor' />
          <Text>红色文字</Text>
        </View>
      </DemoBlock>
    </>
  );
};
