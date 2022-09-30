import React from 'react';
import { Text, View } from '@tarojs/components';
import { ProgressCircle, Space } from 'antd-mobile-taro-ui';
import { DemoBlock } from 'demos';

import styles from './demo1.module.less';

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space style={{ '--gap': '24px' }} wrap>
          <ProgressCircle />
          <ProgressCircle percent={30} />
          <ProgressCircle percent={80} />
          <ProgressCircle percent={50}>50%</ProgressCircle>
        </Space>
      </DemoBlock>

      <DemoBlock title='指定线条宽度'>
        <Space style={{ '--gap': '24px' }}>
          <ProgressCircle percent={75} style={{ '--track-width': '2px' }} />
          <ProgressCircle percent={75} style={{ '--track-width': '4px' }} />
          <ProgressCircle percent={75} style={{ '--track-width': '12px' }} />
        </Space>
      </DemoBlock>

      <DemoBlock title='指定画布宽高'>
        <Space style={{ '--gap': '24px' }} align='center'>
          <ProgressCircle percent={50} style={{ '--size': '40px' }}>
            <Text className={styles.small}>50%</Text>
          </ProgressCircle>
          <ProgressCircle percent={75} style={{ '--size': '60px' }}>
            <Text className={styles.middle}>75%</Text>
          </ProgressCircle>
          <ProgressCircle percent={100} style={{ '--size': '100px' }}>
            <Text className={styles.large}>100%</Text>
          </ProgressCircle>
        </Space>
      </DemoBlock>

      <DemoBlock title='自定义内部文字'>
        <Space style={{ '--gap': '24px' }}>
          <ProgressCircle
            percent={60}
            style={{
              '--size': '100px',
              '--track-width': '4px',
            }}
          >
            <View className={styles.secondaryText}>本月剩余流量</View>
            <View className={styles.mainText}>60</View>
            <View className={styles.secondaryText}>GB</View>
          </ProgressCircle>
          <ProgressCircle
            percent={30}
            style={{
              '--size': '100px',
              '--track-width': '4px',
            }}
          >
            <View className={styles.mainText}>3241</View>
            <View className={styles.secondaryText}>步</View>
          </ProgressCircle>
        </Space>
      </DemoBlock>

      <DemoBlock title='自定义颜色'>
        <Space style={{ '--gap': '24px' }}>
          <ProgressCircle
            percent={60}
            style={{
              '--fill-color': 'var(--adm-color-success)',
            }}
          >
            60%
          </ProgressCircle>
          <ProgressCircle
            percent={60}
            style={{
              '--fill-color': 'var(--adm-color-warning)',
            }}
          >
            60%
          </ProgressCircle>
          <ProgressCircle
            percent={60}
            style={{
              '--fill-color': 'var(--adm-color-danger)',
            }}
          >
            60%
          </ProgressCircle>
        </Space>
      </DemoBlock>
    </>
  );
};
