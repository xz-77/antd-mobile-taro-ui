import { View } from '@tarojs/components';
import React from 'react';
import { SafeArea, List } from 'antd-mobile-taro-ui';
import { data, MHY_PROPERTY_KEY } from './data';

export default () => {
  return (
    <View>
      {data.map(item => {
        return (
          <List header={item.name} key={item.name} mode='card' style={{ '--header-font-size': '20px' }}>
            {Object.keys(item).map((content: keyof typeof item, index) => {
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
