import React, { useState } from 'react';
import { Button, CenterPopup } from 'antd-mobile-taro-ui';
import { DemoBlock } from 'demos';
import styles from './demo1.module.less';
import { View } from '@tarojs/components';

export default () => {
  const [visible, setVisible] = useState(true);
  return (
    <DemoBlock title='中心弹出的弹层'>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        打开
      </Button>
      <CenterPopup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
      >
        <View className={styles.myContent}>Hello</View>
      </CenterPopup>
    </DemoBlock>
  );
};
