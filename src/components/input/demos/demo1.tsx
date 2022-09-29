import React, { useState } from 'react';
import { Input } from 'antd-mobile-taro-ui';
import { DemoBlock } from 'demos';
import styles from './demo1.less';
import { AttentionIcon, AttentionForbidIcon } from 'antd-mobile-taro-icons';
import { View } from '@tarojs/components';

export default () => {
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);
  console.log();
  return (
    <>
      <DemoBlock title='基础用法'>
        <Input
          placeholder='请输入内容'
          value={value}
          onChange={val => {
            setValue(val);
          }}
        />
      </DemoBlock>

      <DemoBlock title='带清除按钮'>
        <Input placeholder='请输入内容' clearable />
      </DemoBlock>

      <DemoBlock title='输入内容右对齐'>
        <Input placeholder='请输入验证码' style={{ '--text-align': 'right' }} clearable />
      </DemoBlock>

      <DemoBlock title='只读状态'>
        <Input placeholder='请输入内容' value='只读模式的输入框' readOnly />
      </DemoBlock>

      <DemoBlock title='禁用状态'>
        <Input placeholder='请输入内容' value='被禁用的输入框' disabled />
      </DemoBlock>

      <DemoBlock title='查看密码'>
        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <View className={styles.password}>
            <Input className={styles.input} placeholder='请输入密码' type={visible ? 'text' : 'password'} />
          </View>
          <View className={styles.eye}>
            {!visible ? (
              <AttentionForbidIcon
                onClick={() => {
                  setVisible(true);
                }}
              />
            ) : (
              <AttentionIcon onClick={() => setVisible(false)} />
            )}
          </View>
        </View>
      </DemoBlock>
    </>
  );
};
