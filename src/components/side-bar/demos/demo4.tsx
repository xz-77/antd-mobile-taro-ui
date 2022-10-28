import React, { useEffect, useRef, useState } from 'react';
import { SideBar } from 'antd-mobile-taro-ui';
import styles from './demo4.module.less';
import { lorem } from '../../../demos';
import { BaseEventOrig, ScrollView, ScrollViewProps, View } from '@tarojs/components';
import Taro from '@tarojs/taro';

const items = [
  { key: '1', title: '第一项', text: lorem.generateParagraphs(8) },
  { key: '2', title: '第二项', text: lorem.generateParagraphs(8) },
  { key: '3', title: '第三项', text: lorem.generateParagraphs(8) },
  { key: '4', title: '第四项', text: lorem.generateParagraphs(8) },
];

export default () => {
  const [activeKey, setActiveKey] = useState('1');

  const mainElementRef = useRef<HTMLDivElement>(null);

  const [h, setH] = useState<number[]>([]);
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      for (const item of items) {
        Taro.createSelectorQuery()
          .select(`#anchor-${item.key}`)
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
    setActiveKey(items[index].key);
  };

  const handleSideBarOnChange = (key: string) => {
    const k = Number(key);
    let index = 0;
    let top = 0;
    while (index < k - 1) {
      top += h[index];
      index++;
    }

    setScrollTop(top);
    setActiveKey(key);
  };

  return (
    <View className={styles.container} id='xxx-1'>
      <View className={styles.side}>
        <SideBar activeKey={activeKey} onChange={key => handleSideBarOnChange(key)}>
          {items.map(item => (
            <SideBar.Item key={item.key} title={item.title} />
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
        {items.map(item => (
          <View key={item.key} id={`anchor-${item.key}`}>
            <View className={styles.h2}>{item.title}</View>
            {item.text}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
