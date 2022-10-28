import React, { useState } from 'react';
import { SideBar } from 'antd-mobile-taro-ui';
import { tabs } from './tabs';
import styles from './demo3.module.less';
import classNames from 'classnames';
import { View } from '@tarojs/components';
import { DemoBlock } from 'demos';

export default () => {
  const [activeKey, setActiveKey] = useState('key1');

  return (
    <DemoBlock title='支撑整个页面' padding='0'>
      <View className={styles.container}>
        <View className={styles.side}>
          <SideBar activeKey={activeKey} onChange={setActiveKey}>
            {tabs.map(item => (
              <SideBar.Item key={item.key} title={item.title} />
            ))}
          </SideBar>
        </View>
        <View className={styles.main}>
          <View className={classNames(styles.content, activeKey === 'key1' && styles.active)}>页面 1</View>
          <View className={classNames(styles.content, activeKey === 'key2' && styles.active)}>页面 2</View>
          <View className={classNames(styles.content, activeKey === 'key3' && styles.active)}>页面 3</View>
        </View>
      </View>
    </DemoBlock>
  );
};
