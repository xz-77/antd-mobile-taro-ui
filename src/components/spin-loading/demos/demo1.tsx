import React from 'react';
import { Space, SpinLoading } from 'antd-mobile-taro-ui';
import { DemoBlock } from 'demos';

export default () => {
  return (
    <>
      <DemoBlock title='默认'>
        <SpinLoading />
      </DemoBlock>
      <DemoBlock title='颜色'>
        <Space direction='horizontal' wrap block style={{ '--gap': '16px' }}>
          <SpinLoading color='default' />
          <SpinLoading color='primary' />
          <SpinLoading color='currentColor' />
          <SpinLoading color='#ddd' />
          <SpinLoading style={{ '--color': 'red' }} />
        </Space>
      </DemoBlock>
      <DemoBlock title='大小'>
        <Space direction='horizontal' wrap block style={{ '--gap': '16px' }}>
          <SpinLoading style={{ '--size': '24px' }} />
          <SpinLoading style={{ '--size': '32px' }} />
          <SpinLoading style={{ '--size': '48px' }} />
        </Space>
      </DemoBlock>
    </>
  );
};
