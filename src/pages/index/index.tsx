import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import { View, Text } from '@tarojs/components';
import { Avatar, SafeArea, List } from 'antd-mobile-taro-ui';
import { EditIcon } from 'antd-mobile-taro-icons';
import { data } from './data';
import styles from './index.module.less';
import logo from './logo.jpg';

const Index = () => {
  const [count, setCount] = useState(0);

  const handleLogoClick = () => {
    setCount(pre => pre + 1);
  };

  useEffect(() => {
    return () => {
      setCount(0);
    };
  }, []);

  useEffect(() => {
    if (count >= 3) {
      Taro.navigateTo({
        url: '/pages/mhy-network/index',
      });
    }
  }, [count]);

  return (
    <>
      <View className={styles.header}>
        <View onClick={handleLogoClick}>
          <Avatar src={logo} className={styles.avatar} />
        </View>
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
