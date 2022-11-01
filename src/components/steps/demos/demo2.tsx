import React from 'react';
import { Button, Space, Steps } from 'antd-mobile-taro-ui';
import { DemoBlock } from 'demos';
import { AllIcon, EmojiIcon, ShareIcon } from 'antd-mobile-taro-icons';
import { View } from '@tarojs/components';

const { Step } = Steps;

export default () => {
  return (
    <>
      <DemoBlock title='自定义图标及大小'>
        <Steps
          direction='vertical'
          current={1}
          style={{
            '--title-font-size': '17px',
            '--description-font-size': '15px',
            '--indicator-margin-right': '12px',
            '--icon-size': '22px',
          }}
        >
          <Step title='填写机构信息' description='这里是一些描述' icon={<AllIcon style={{ fontSize: '16px' }} />} />
          <Step
            title='签约机构'
            description={
              <Space block direction='vertical'>
                <View>这里是一些描述</View>
                <Button color='primary'>去查看</Button>
              </Space>
            }
            icon={<EmojiIcon style={{ fontSize: '16px' }} />}
          />
          <Step title='关联服务区' description='这里是一些描述' icon={<ShareIcon style={{ fontSize: '16px' }} />} />
        </Steps>
      </DemoBlock>
    </>
  );
};
