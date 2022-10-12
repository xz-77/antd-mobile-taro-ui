import React from 'react';
import { NavBar, Space, Toast } from 'antd-mobile-taro-ui';
import { DemoBlock } from 'demos';
import { SearchIcon, MoreIcon, CloseIcon } from 'antd-mobile-taro-icons';

import './demo1.less';
import { View } from '@tarojs/components';

export default () => {
  const right = (
    <View style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <SearchIcon style={{ fontSize: '24px' }} />
        <MoreIcon style={{ fontSize: '24px' }} />
      </Space>
    </View>
  );

  const back = () =>
    Toast.show({
      content: '点击了返回区域',
      duration: 1000,
    });

  return (
    <>
      <DemoBlock title='基础用法' padding='0'>
        <NavBar onBack={back}>标题</NavBar>
      </DemoBlock>

      <DemoBlock title='返回按钮显示文字' padding='0'>
        <NavBar back='返回' onBack={back}>
          标题
        </NavBar>
      </DemoBlock>

      <DemoBlock title='返回按钮不显示图标' padding='0'>
        <NavBar back='返回' onBack={back} backArrow={false}>
          标题
        </NavBar>
      </DemoBlock>

      <DemoBlock title='自定义返回按钮图标' padding='0'>
        <NavBar back='返回' backArrow={<CloseIcon style={{ fontSize: '24px' }} />} onBack={back}>
          标题
        </NavBar>
      </DemoBlock>

      <DemoBlock title='自定义左侧区域' padding='0'>
        <NavBar back='返回' onBack={back} left='关闭'>
          标题
        </NavBar>
      </DemoBlock>

      <DemoBlock title='自定义右侧区域' padding='0'>
        <NavBar right={right} onBack={back}>
          标题
        </NavBar>
      </DemoBlock>

      <DemoBlock title='自定义高度及边框' padding='0'>
        <NavBar
          style={{
            '--height': '36px',
            '--border-bottom': '1px #eee solid',
          }}
          onBack={back}
        >
          标题
        </NavBar>
      </DemoBlock>

      <DemoBlock title='标题超长' padding='0'>
        <NavBar onBack={back}>这是一条很长很长很长很长很长很长的标题</NavBar>
      </DemoBlock>

      <DemoBlock title='显示副标题' padding='0'>
        <NavBar onBack={back}>
          <View>
            <View>标题</View>
            <View className='my-nav-bar-subtitle'>副标题</View>
          </View>
        </NavBar>
      </DemoBlock>
    </>
  );
};
