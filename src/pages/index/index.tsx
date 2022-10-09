import Taro from '@tarojs/taro';
import React from 'react';
import { View, Text } from '@tarojs/components';
import { Avatar, SafeArea } from 'antd-mobile-taro-ui';
import { EditIcon } from 'antd-mobile-taro-icons';
import List from '@/components/list';
import { data } from './data';
import styles from './index.module.less';
import logo from './logo.jpg';

const Index = () => {
  return (
    <>
      <View className={styles.header}>
        <Avatar src={logo} className={styles.avatar} />
        <View>
          以<Text>antd-mobile</Text>为设计标准
        </View>
        <View>
          基于<Text>Taro</Text>框架的微信小程序组件库
        </View>
      </View>
      {data.map(content => (
        <List mode='card' key={content.name}>
          {content.items.map(item => (
            <List.Item
              prefix={<EditIcon className={styles.iconfont} />}
              key={item.title}
              description={item.desc}
              onClick={() => Taro.navigateTo({ url: item.url })}
            >
              {item.title}
            </List.Item>
          ))}
        </List>
      ))}
      <SafeArea position='bottom' />
    </>
  );
};

export default Index;
