import React, { useState } from 'react';
import { Badge, NavBar, Space, TabBar } from 'antd-mobile-taro-ui';
import {
  AllIcon,
  FavorFillIcon,
  FavorIcon,
  MoreIcon,
  MyFillIcon,
  MyIcon,
  SearchIcon,
  WarnIcon,
} from 'antd-mobile-taro-icons';
import styles from './demo2.module.less';
import { View } from '@tarojs/components';

export default () => {
  const [activeKey, setActiveKey] = useState('todo');

  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AllIcon />,
      badge: Badge.dot,
    },
    {
      key: 'todo',
      title: '待办',
      icon: <WarnIcon />,
      badge: '5',
    },
    {
      key: 'message',
      title: '消息',
      icon: (active: boolean) => (active ? <FavorFillIcon /> : <FavorIcon />),
      badge: '99+',
    },
    {
      key: 'personalCenter',
      title: '我的',
      icon: (active: boolean) => (active ? <MyFillIcon /> : <MyIcon />),
    },
  ];
  return (
    <View className={styles.tabBardemo2}>
      <NavBar
        right={
          <View style={{ fontSize: 24 }}>
            <Space style={{ '--gap': '16px' }}>
              <SearchIcon style={{ fontSize: '24px' }} />
              <MoreIcon style={{ fontSize: '24px' }} />
            </Space>
          </View>
        }
        className={styles.top}
      >
        标题
      </NavBar>
      <View className={styles.body}>
        <View>{activeKey}</View>
      </View>
      <View className={styles.bottom}>
        <TabBar activeKey={activeKey} onChange={setActiveKey} safeArea>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </View>
    </View>
  );
};
