import React from 'react';
import { Footer, Space } from 'antd-mobile-taro-ui';
import { DemoBlock } from 'demos';
import { EmojiIcon } from 'antd-mobile-taro-icons';
import { ChipItem, LinkItem } from '../footer';
import Taro from '@tarojs/taro';

export default () => {
  const links: LinkItem[] = [
    {
      text: '阿里云',
    },
    {
      text: '支付宝',
    },
  ];
  const chips: ChipItem[] = [
    {
      text: '蚂蚁借呗',
    },
    {
      text: '备用金',
    },
    {
      text: '蚂蚁花呗',
    },
  ];
  const chipsLinkData: ChipItem[] = [
    {
      text: '蚂蚁借呗',
      type: 'link',
    },
    {
      text: '备用金',
      type: 'link',
    },
    {
      text: '蚂蚁花呗',
      type: 'link',
    },
  ];

  const onChipClick = (item: ChipItem, index: number) => {
    console.log(item, index);
    Taro.showToast({ title: `${item?.text}被点击了`, icon: 'none' });
  };
  const onLinkClick = (item: LinkItem, index: number) => {
    console.log(item, index);

    Taro.showToast({ title: '跳转', icon: 'none' });
  };

  return (
    <>
      <DemoBlock title='基础页脚'>
        <Footer label='没有更多了'></Footer>
      </DemoBlock>
      <DemoBlock title='自定义 label'>
        <Footer
          label={
            <Space>
              <EmojiIcon /> 蚂蚁财富
            </Space>
          }
        ></Footer>
      </DemoBlock>
      <DemoBlock title='带内容的页脚'>
        <Footer content='@ 2004-2020 Alipay.com All rights reserved'></Footer>
      </DemoBlock>
      <DemoBlock title='带链接的页脚'>
        <Footer
          links={[
            {
              text: '阿里云',
            },
          ]}
        ></Footer>
      </DemoBlock>
      <DemoBlock title='通过点击事件跳转'>
        <Footer links={links} onLinkClick={onLinkClick}></Footer>
      </DemoBlock>
      <DemoBlock title='带标签的页脚'>
        <Footer chips={chips}></Footer>
      </DemoBlock>
      <DemoBlock title='标签可点击'>
        <Footer chips={chipsLinkData} onChipClick={onChipClick}></Footer>
      </DemoBlock>
      <DemoBlock title='组合使用'>
        <Footer
          label='没有更多了'
          content='@ 2004-2020 Alipay.com All rights reserved'
          links={links}
          chips={chips}
        ></Footer>
      </DemoBlock>
    </>
  );
};
