import React from 'react';
import { WaterMark } from 'antd-mobile-taro-ui';
import { DemoBlock, DemoDescription } from 'demos';
import { View, Image } from '@tarojs/components';

export default () => {
  return (
    <DemoBlock title='局部水印'>
      <View
        style={{
          display: 'inline-flex',
          position: 'relative',
        }}
      >
        <View style={{ width: '351px', height: '211px' }}>
          <Image src='https://images.unsplash.com/photo-1529919864908-4c7b46026144?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTN8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60' />
        </View>
        <WaterMark content={'Ant Design Mobile'} gapX={12} gapY={24} fullPage={false} fontColor='red' />
      </View>
      <DemoDescription content='把 WaterMark 放到一个 relative 定位的父元素，它会自动撑满这个父元素的范围。' />
    </DemoBlock>
  );
};
