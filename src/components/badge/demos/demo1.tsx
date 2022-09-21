import React from 'react';
import { Badge, Space } from 'antd-mobile-taro-ui';
import { View } from '@tarojs/components';
import { DemoBlock } from 'demos';

import styles from './demo1.module.less';

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space style={{ '--gap': '24px' }}>
          <Badge content='5'>
            <View className={styles.box} />
          </Badge>
          <Badge content='新'>
            <View className={styles.box} />
          </Badge>
          <Badge content={Badge.dot}>
            <View className={styles.box} />
          </Badge>
        </Space>
      </DemoBlock>

      <DemoBlock title='带边框'>
        <Badge content='更新啦' bordered>
          <View className={`${styles.box} ${styles.dark}`} />
        </Badge>
      </DemoBlock>

      <DemoBlock title='独立使用'>
        <Space>
          <Badge content='99+' style={{ '--color': '#000' }} />
          <Badge content='新消息!' />
        </Space>
      </DemoBlock>

      <DemoBlock title='自定义颜色和偏移量'>
        <Space style={{ '--gap': '24px' }}>
          <Badge content={Badge.dot} style={{ '--right': '100%', '--top': '100%', '--color': '#108ee9' }}>
            <View className={styles.box} />
          </Badge>
          <Badge content={Badge.dot} style={{ '--right': '100%', '--color': '#87d068' }}>
            <View className={styles.box} />
          </Badge>
          <Badge content={Badge.dot}>
            <View className={styles.box} />
          </Badge>
          <Badge content={Badge.dot} style={{ '--top': '100%', '--color': 'orange' }}>
            <View className={styles.box} />
          </Badge>
        </Space>
      </DemoBlock>
    </>
  );
};
