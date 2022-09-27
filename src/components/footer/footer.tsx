import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { View, Text, ITouchEvent } from '@tarojs/components';
import { Divider } from '../divider/divider';

const classPrefix = `adm-footer`;

export type LinkItem = {
  text: string;
  // href: string;
};

export type ChipItem = {
  text: ReactNode;
  type?: 'plain' | 'link';
};

export type FooterProps = {
  label?: ReactNode;
  links?: LinkItem[];
  content?: ReactNode;
  chips?: ChipItem[];
  onChipClick?: (item: ChipItem, index: number) => void;
  onLinkClick?: (item: LinkItem, index: number) => void;
} & NativeProps<'--background-color'>;

const defaultProps: FooterProps = {
  label: '',
  links: [],
  content: '',
  chips: [],
};

export const Footer: FC<FooterProps> = p => {
  const props = mergeProps(defaultProps, p);
  const { label, links, content, chips, onChipClick, onLinkClick } = props;

  const clickChipItem = (item: ChipItem, index: number) => {
    if (chips?.length && item.type === 'link') {
      onChipClick?.(item, index);
    }
  };

  const clickLinkItem = (item: LinkItem, index: number, e: ITouchEvent) => {
    if (onLinkClick) {
      e.preventDefault();
      onLinkClick(item, index);
    }
  };
  return withNativeProps(
    props,
    <View className={classNames(classPrefix)}>
      {label && (
        <View className={`${classPrefix}-label`}>
          <Divider>{label}</Divider>
        </View>
      )}
      {links && links.length > 0 && (
        <View className={`${classPrefix}-links`}>
          {links.map((link, index) => {
            return (
              <React.Fragment key={index}>
                <Text
                  // onLongClick={() => Taro.navigateTo({ url: link.href })}
                  // rel='noopener noreferrer'
                  onClick={event => clickLinkItem(link, index, event)}
                >
                  {link.text}
                </Text>
                {index !== links.length - 1 && <Divider direction='vertical' />}
              </React.Fragment>
            );
          })}
        </View>
      )}
      {content && <View className={`${classPrefix}-content`}>{content}</View>}
      {chips && chips.length > 0 && (
        <View className={`${classPrefix}-chips`}>
          {chips.map((chip, index) => {
            return (
              <View
                key={index}
                onClick={() => clickChipItem(chip, index)}
                className={classNames(`${classPrefix}-chip`, {
                  [`${classPrefix}-chip-link`]: chip.type === 'link',
                })}
              >
                {chip.text}
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};
