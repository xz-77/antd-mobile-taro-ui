import { View } from '@tarojs/components';
import React from 'react';
import { SafeArea, List, Avatar, Space } from 'antd-mobile-taro-ui';
import { data, MHY_PROPERTY_KEY } from './data';

export default () => {
  return (
    <View>
      {data.map(item => {
        return (
          <List
            header={
              <Space align='center'>
                {item.avatar && <Avatar src={item.avatar} style={{ '--border-radius': '50%' }} />}
                <View>{item.name}</View>
              </Space>
            }
            key={item.name}
            mode='card'
            style={{ '--header-font-size': '20px' }}
          >
            {Object.keys(item)
              .filter(key => key !== 'avatar')
              .map((content: keyof typeof MHY_PROPERTY_KEY, index) => {
                return (
                  <List.Item key={index} extra={item[content]}>
                    {MHY_PROPERTY_KEY[content]}
                  </List.Item>
                );
              })}
          </List>
        );
      })}
      <SafeArea position='bottom' />
    </View>
  );
};
