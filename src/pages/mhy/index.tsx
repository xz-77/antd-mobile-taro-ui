import React, { useEffect, useRef, useState } from 'react';
import { Avatar, List, SideBar, Space } from 'antd-mobile-taro-ui';
import { BaseEventOrig, ScrollView, ScrollViewProps, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import styles from './index.module.less';
import { data, MHY_PROPERTY_KEY } from './data';

export default () => {
  const [activeKey, setActiveKey] = useState(0);

  const mainElementRef = useRef<HTMLDivElement>(null);

  const [h, setH] = useState<number[]>([]);
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      for (let i = 0; i < data.length; i++) {
        Taro.createSelectorQuery()
          .select(`#anchor-${i}`)
          .boundingClientRect(rect => {
            setH(pre => [...pre, rect.height]);
          })
          .exec();
      }
    }, 1000);
  }, []);

  const handleScroll = (e: BaseEventOrig<ScrollViewProps.onScrollDetail>) => {
    const top = e.detail.scrollTop;

    let index = 0;
    let total = h[index];

    while (total <= top && index < h.length - 1) {
      index++;
      total += h[index];
    }
    setActiveKey(index);
  };

  const handleSideBarOnChange = (key: string) => {
    const k = Number(key);
    let index = 0;
    let top = 0;
    while (index < k) {
      top += h[index];
      index++;
    }
    setScrollTop(top);
    setActiveKey(index);
  };

  return (
    <View className={styles.container}>
      <View className={styles.side}>
        <SideBar
          activeKey={activeKey.toString()}
          style={{ '--width': '90px' }}
          onChange={key => handleSideBarOnChange(key)}
        >
          {data.map((item, index) => (
            <SideBar.Item
              key={index.toString()}
              title={
                <Space align='center'>
                  <Avatar src={item.avatar} style={{ '--border-radius': '50%', '--size': '20px' }} />
                  <View>{item.name}</View>
                </Space>
              }
            />
          ))}
        </SideBar>
      </View>
      <ScrollView
        scrollY
        scrollWithAnimation
        className={styles.main}
        ref={mainElementRef}
        onScroll={handleScroll}
        scrollTop={scrollTop}
      >
        {data.map((item, index) => {
          return (
            <View id={`anchor-${index}`} key={item.name} className={styles.content}>
              <View className={styles.bg} style={{ backgroundImage: `url(${item.avatar})` }} />
              <List>
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
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
