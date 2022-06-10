import Taro from '@tarojs/taro';
import React from 'react';
import { View } from '@tarojs/components';
import List from '@/components/list';
import { data } from './data';

const Index = () => {
  return (
    <List>
      {data.map(item => (
        <List.Item
          prefix={
            <View
              style={{ width: 30, height: 30, backgroundColor: '#1677ff', borderRadius: '100%' }}
            />
          }
          key={item.title}
          description={item.desc}
          onClick={() => Taro.navigateTo({ url: item.url })}
        >
          {item.title}
        </List.Item>
      ))}
    </List>
  );
};

export default Index;
