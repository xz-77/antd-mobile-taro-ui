import React from 'react';
import { Card, Button } from 'antd-mobile-taro-ui';
import { DemoBlock } from 'demos';
import { CloseIcon } from 'antd-mobile-taro-icons';

import styles from './demo1.module.less';
import { View } from '@tarojs/components';

export default () => {
  const onClick = () => {
    // Toast.show('点击了卡片');
  };

  const onHeaderClick = () => {
    // Toast.show('点击了卡片Header区域');
  };

  const onBodyClick = () => {
    // Toast.show('点击了卡片Body区域');
  };
  return (
    <>
      <DemoBlock title='基础用法' background='gray'>
        <Card title='卡片标题' onClick={onClick}>
          卡片内容
        </Card>
      </DemoBlock>

      <DemoBlock title='没有卡片内容' background='gray'>
        <Card title='卡片标题' onClick={onClick} />
      </DemoBlock>

      <DemoBlock title='没有卡片标题' background='gray'>
        <Card onClick={onClick}>卡片内容</Card>
      </DemoBlock>

      <DemoBlock title='自定义卡片内容' background='gray'>
        <Card
          title={
            <View style={{ fontWeight: 'normal', display: 'flex' }}>
              <CloseIcon style={{ marginRight: '4px', color: '#1677ff' }} />
              卡片标题
            </View>
          }
          extra={<CloseIcon />}
          onBodyClick={onBodyClick}
          onHeaderClick={onHeaderClick}
          style={{ borderRadius: '16px' }}
        >
          <View className={styles.content}>卡片内容</View>
          <View className={styles.footer} onClick={e => e.stopPropagation()}>
            <Button
              color='primary'
              onClick={() => {
                // Toast.show('点击了底部按钮');
              }}
            >
              底部按钮
            </Button>
          </View>
        </Card>
      </DemoBlock>

      <DemoBlock title='自定义卡片样式' background='gray'>
        <Card
          headerStyle={{
            color: '#1677ff',
          }}
          bodyClassName={styles.customBody}
          title='卡片标题'
        >
          卡片内容
        </Card>
      </DemoBlock>
    </>
  );
};
