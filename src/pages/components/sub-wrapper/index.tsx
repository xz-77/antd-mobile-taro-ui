import Taro from '@tarojs/taro';
import React from 'react';
import { SafeArea, List } from 'antd-mobile-taro-ui';
import { View } from '@tarojs/components';
import styles from './index.module.less';

interface SubWrapperProps {
  data: {
    name: string;
    items: {
      title: string;
      desc: string;
      url: string;
    }[];
  }[];
}

const SubWrapper = (props: SubWrapperProps) => {
  const { data = [] } = props;
  return (
    <View>
      {data.map(content => (
        <List header={content.name} key={content.name}>
          {content.items.map(item => (
            <List.Item
              className={styles.item}
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
    </View>
  );
};

export default SubWrapper;
