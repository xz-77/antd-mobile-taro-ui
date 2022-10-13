import React from 'react';
import { View } from '@tarojs/components';
import classNames from 'classnames';
import './index.less';
import { Grid, SafeArea } from 'antd-mobile-taro-ui';
import Taro from '@tarojs/taro';
import iconfont from './iconfont.json';

export default () => {
  // useEffect(() => {
  //   Toast.show({
  //     duration: 3000,
  //     content: '点击Icon即可完成复制',
  //   });
  // }, []);

  const toUpperCaseFirst = (name: string) => {
    return name.slice(0, 1).toUpperCase() + name.slice(1);
  };

  const renderIconFnName = (name: string) => {
    // 处理常规情况loading、下划线情况round_check_fill
    const arr = name.split('_');
    const format = arr.map(n => toUpperCaseFirst(n));

    return `${format.join('')}Icon`;
  };

  const copyIconfont = (name: string) => {
    Taro.setClipboardData({
      data: name,
    });
  };

  return (
    <View className='iconfont-page'>
      <Grid columns={3}>
        {iconfont.glyphs.map(item => {
          const elementName = renderIconFnName(item.name);
          return (
            <Grid.Item key={item.name}>
              <View
                className='iconfont-wrapper'
                hoverClass='iconfont-wrapper-hover'
                onClick={() => copyIconfont(elementName)}
              >
                <View className={classNames('icon', 'iconfont', `icon-${item.font_class}`, 'iconfont-size')} />
                <View className='iconfont-wrapper-name'>{elementName}</View>
              </View>
            </Grid.Item>
          );
        })}
      </Grid>
      <SafeArea position='bottom' />
    </View>
  );
};
