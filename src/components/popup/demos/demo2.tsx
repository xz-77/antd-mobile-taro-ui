import React, { useState } from 'react';
import { Popup, Space, Button } from 'antd-mobile';
import { DemoBlock } from 'demos';
import { View } from '@tarojs/components';

export default () => {
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(false);

  return (
    <>
      <DemoBlock title='多层堆叠'>
        <Button
          onClick={() => {
            setVisible1(true);
          }}
        >
          展开第一个弹出层
        </Button>
        <Popup
          visible={visible1}
          onMaskClick={() => {
            setVisible1(false);
          }}
          bodyStyle={{ height: '40vh' }}
        >
          <View style={{ padding: '24px' }}>
            <Space direction='vertical'>
              <View>这是弹出层1</View>
              <Button
                onClick={() => {
                  setVisible2(true);
                }}
              >
                展开第二个弹出层
              </Button>
            </Space>
          </View>
        </Popup>
        <Popup
          visible={visible2}
          onMaskClick={() => {
            setVisible2(false);
          }}
          bodyStyle={{ height: '20vh' }}
        >
          <View style={{ padding: '24px' }}>
            <View>这是弹出层2</View>
          </View>
        </Popup>
      </DemoBlock>
    </>
  );
};
