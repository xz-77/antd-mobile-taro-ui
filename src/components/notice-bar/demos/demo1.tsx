import React from 'react';
import { Text } from '@tarojs/components';
import { NoticeBar, Space } from 'antd-mobile-taro-ui';
import { DemoBlock, lorem } from 'demos';
import { CloseIcon } from 'antd-mobile-taro-icons';

const demoLongText = lorem.generateWords(20);

export default () => {
  return (
    <>
      <DemoBlock title='通告栏语义' padding='0' background='transparent'>
        <Space block direction='vertical'>
          <NoticeBar content='默认' color='default' />
          <NoticeBar content='警告' color='alert' />
          <NoticeBar content='错误' color='error' />
          <NoticeBar content='信息' color='info' />
        </Space>
      </DemoBlock>

      <DemoBlock title='可关闭' padding='0'>
        <NoticeBar content='这条通知可以关闭' color='alert' closeable />
      </DemoBlock>

      <DemoBlock title='超长滚动' padding='0'>
        <NoticeBar content={demoLongText} color='alert' />
      </DemoBlock>

      <DemoBlock title='自定义' padding='0' background='transparent'>
        <Space block direction='vertical'>
          <NoticeBar extra={<CloseIcon style={{ fontSize: 18 }} />} icon={<CloseIcon />} content={'自定义图标'} />
          <NoticeBar
            extra={
              <Space style={{ '--gap': '12px' }}>
                <Text>查看详情</Text>
                <Text>关闭</Text>
              </Space>
            }
            content={'自定义右侧功能区'}
            color='alert'
          />
        </Space>
      </DemoBlock>
    </>
  );
};
