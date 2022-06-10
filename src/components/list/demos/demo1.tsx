import React from 'react';
import { List } from 'antd-mobile';
import { Image } from '@tarojs/components';
import { RightOutline } from '../right-outline';
import { users } from './users';
// import {
//   UnorderedListOutline,
//   PayCircleOutline,
//   SetOutline,
// } from 'antd-mobile-icons'

export default () => {
  return (
    <>
      <List header='基础用法'>
        <List.Item>1</List.Item>
        <List.Item>2</List.Item>
        <List.Item>3</List.Item>
      </List>

      <List header='可点击列表'>
        <List.Item
          prefix={<Image src={users[2].avatar} style={{ width: 17, height: 17 }} />}
          onClick={() => {}}
        >
          账单
        </List.Item>
        <List.Item prefix={<RightOutline />} onClick={() => {}}>
          总资产
        </List.Item>
        <List.Item prefix={<RightOutline />} onClick={() => {}}>
          设置
        </List.Item>
      </List>

      <List header='复杂列表'>
        {/* <List.Item extra={<Switch defaultChecked />}>新消息通知</List.Item> */}
        <List.Item extra='未开启' clickable>
          大字号模式
        </List.Item>
        <List.Item description='管理已授权的产品和设备' clickable>
          授权管理
        </List.Item>
        <List.Item title='副标题信息A' description='副标题信息B' clickable>
          这里是主信息
        </List.Item>
      </List>

      <List header='禁用状态'>
        <List.Item disabled clickable prefix={<RightOutline />}>
          账单
        </List.Item>
        <List.Item disabled prefix={<RightOutline />}>
          总资产
        </List.Item>
      </List>
    </>
  );
};
