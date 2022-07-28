import React from 'react';
import { Grid } from 'antd-mobile-taro-ui';
import { DemoBlock } from 'demos';

import styles from './demo1.module.less';
import { View } from '@tarojs/components';

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Grid columns={3} gap={8}>
          <Grid.Item>
            <View className={styles['grid-demo-item-block']}>A</View>
          </Grid.Item>
          <Grid.Item>
            <View className={styles['grid-demo-item-block']}>B</View>
          </Grid.Item>
          <Grid.Item>
            <View className={styles['grid-demo-item-block']}>C</View>
          </Grid.Item>
          <Grid.Item>
            <View className={styles['grid-demo-item-block']}>D</View>
          </Grid.Item>
          <Grid.Item>
            <View className={styles['grid-demo-item-block']}>E</View>
          </Grid.Item>
        </Grid>
      </DemoBlock>

      <DemoBlock title='控制格子的跨度'>
        <Grid columns={3} gap={8}>
          <Grid.Item>
            <View className={styles['grid-demo-item-block']}>A</View>
          </Grid.Item>
          <Grid.Item span={2}>
            <View className={styles['grid-demo-item-block']}>B</View>
          </Grid.Item>
          <Grid.Item span={2}>
            <View className={styles['grid-demo-item-block']}>C</View>
          </Grid.Item>
          <Grid.Item>
            <View className={styles['grid-demo-item-block']}>D</View>
          </Grid.Item>
          <Grid.Item span={3}>
            <View className={styles['grid-demo-item-block']}>E</View>
          </Grid.Item>
        </Grid>
      </DemoBlock>
    </>
  );
};
