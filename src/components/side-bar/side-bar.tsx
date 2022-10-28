import React, { FC, ReactNode, ReactElement, ComponentProps } from 'react';
import classNames from 'classnames';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { usePropsValue } from 'antd-mobile/es/utils/use-props-value';
import { traverseReactNode } from 'antd-mobile/es/utils/traverse-react-node';
import { View } from '@tarojs/components';
import { Corner } from './corner';
import Badge, { BadgeProps } from '../badge';

const classPrefix = `adm-side-bar`;

export type SideBarItemProps = {
  title?: ReactNode;
  disabled?: boolean;
  badge?: BadgeProps['content'];
} & NativeProps;

/* istanbul ignore next */
export const SideBarItem: FC<SideBarItemProps> = () => {
  return null;
};

export type SideBarProps = {
  activeKey?: string | null;
  defaultActiveKey?: string | null;
  onChange?: (key: string) => void;
  children?: React.ReactNode;
} & NativeProps<'--width' | '--height' | '--item-border-radius' | '--background-color'>;

export const SideBar: FC<SideBarProps> = props => {
  let firstActiveKey: string | null = null;

  const items: ReactElement<ComponentProps<typeof SideBarItem>>[] = [];

  traverseReactNode(props.children, (child, index) => {
    if (!React.isValidElement(child)) return;
    const { key } = child;
    if (typeof key !== 'string') return;
    if (index === 0) {
      firstActiveKey = key;
    }

    // @ts-ignore
    items.push(child);
  });

  const [activeKey, setActiveKey] = usePropsValue({
    value: props.activeKey,
    defaultValue: props.defaultActiveKey ?? firstActiveKey,
    onChange: v => {
      if (v === null) return;
      props.onChange?.(v);
    },
  });

  const lastItem = items[items.length - 1];
  const isLastItemActive = lastItem && lastItem.key === activeKey;

  return withNativeProps(
    props,
    <View className={classPrefix}>
      <View className={`${classPrefix}-items`}>
        {items.map((item, index) => {
          const active = item.key === activeKey;
          const isActiveNextSibling = items[index - 1] && items[index - 1].key === activeKey;
          const isActivePreviousSibling = items[index + 1] && items[index + 1].key === activeKey;

          return withNativeProps(
            item.props,
            <View
              // @ts-ignore
              key={item.key}
              onClick={() => {
                const { key } = item;
                if (key === undefined || key === null || item.props.disabled) return;
                setActiveKey(key.toString());
              }}
              className={classNames(`${classPrefix}-item`, {
                [`${classPrefix}-item-active`]: active,
                [`${classPrefix}-item-disabled`]: item.props.disabled,
              })}
            >
              <>
                {isActiveNextSibling && (
                  <Corner className={`${classPrefix}-item-corner ${classPrefix}-item-corner-top`} />
                )}
                {isActivePreviousSibling && (
                  <Corner className={`${classPrefix}-item-corner ${classPrefix}-item-corner-bottom`} />
                )}
              </>
              <Badge content={item.props.badge} className={`${classPrefix}-badge`}>
                <View className={`${classPrefix}-item-title`}>
                  {active && <View className={`${classPrefix}-item-highlight`} />}
                  {item.props.title}
                </View>
              </Badge>
            </View>
          );
        })}
      </View>
      <View
        className={classNames(
          `${classPrefix}-extra-space`,
          isLastItemActive && `${classPrefix}-item-active-next-sibling`
        )}
      >
        {isLastItemActive && <Corner className={`${classPrefix}-item-corner ${classPrefix}-item-corner-top`} />}
      </View>
    </View>
  );
};
