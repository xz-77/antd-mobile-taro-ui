import React from 'react';
import { Button, Space, Steps } from 'antd-mobile-taro-ui';
import { DemoBlock } from 'demos';
import { CheckIcon, RoundCheckFillIcon, ShareIcon } from 'antd-mobile-taro-icons';

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
          <Step title='填写机构信息' description='这里是一些描述' icon={<CheckIcon />} />
          <Step
            title='签约机构'
            description={
              <Space block direction='vertical'>
                <div>这里是一些描述</div>
                <Button color='primary'>去查看</Button>
              </Space>
            }
            icon={<RoundCheckFillIcon />}
          />
          <Step title='关联服务区' description='这里是一些描述' icon={<ShareIcon />} />
        </Steps>
      </DemoBlock>
    </>
  );
};
