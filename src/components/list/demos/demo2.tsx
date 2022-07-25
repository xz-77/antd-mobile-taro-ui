import { Image } from '@tarojs/components';
import { List } from 'antd-mobile-taro-ui';
import React from 'react';
import './demo2.less';
import { users } from './users';

export default () => {
  return (
    <List header='用户列表'>
      {users.map(user => (
        <List.Item
          key={user.name}
          prefix={
            <Image
              src={user.avatar}
              className='demo2-image'
              // fit='cover'
              mode='aspectFit'
              // width={40}
              // height={40}
            />
          }
          description={user.description}
        >
          {user.name}
        </List.Item>
      ))}
    </List>
  );
};
