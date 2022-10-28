import React from 'react';
import { DemoBlock } from 'demos';
import { SideBar } from 'antd-mobile-taro-ui';
import { tabs } from './tabs';
import styles from './demo2.module.less';
import { View, Text } from '@tarojs/components';

export default () => {
  return (
    <>
      <DemoBlock title='选项带数字' padding='0'>
        <SideBar>
          <SideBar.Item
            key='key1'
            title={
              <View>
                选项一
                <Text className={styles.count}>(8)</Text>
              </View>
            }
          />
          <SideBar.Item
            key='key2'
            title={
              <View>
                选项二有点长它折行了
                <Text className={styles.count}>(5)</Text>
              </View>
            }
          />
        </SideBar>
      </DemoBlock>

      <DemoBlock title='自定义列宽' padding='0'>
        <SideBar style={{ '--width': '120px' }}>
          {tabs.map(item => (
            <SideBar.Item key={item.key} title={item.title} />
          ))}
        </SideBar>
      </DemoBlock>

      <DemoBlock title='自定义选中项圆角' padding='0'>
        <SideBar style={{ '--item-border-radius': '0px' }}>
          {tabs.map(item => (
            <SideBar.Item key={item.key} title={item.title} />
          ))}
        </SideBar>
      </DemoBlock>
    </>
  );
};
