import React, { FC, ReactNode, ReactElement, ComponentProps } from 'react';
import classNames from 'classnames';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { usePropsValue } from 'antd-mobile/es/utils/use-props-value';
import { traverseReactNode } from 'antd-mobile/es/utils/traverse-react-node';
import { View } from '@tarojs/components';
import Badge, { BadgeProps } from '../badge';
import SafeArea from '../safe-area';

export type TabBarItemProps = {
  icon?: ReactNode | ((active: boolean) => ReactNode);
  title?: ReactNode | ((active: boolean) => ReactNode);
  badge?: BadgeProps['content'];
} & NativeProps;

/* istanbul ignore next */
export const TabBarItem: FC<TabBarItemProps> = () => {
  return null;
};

export type TabBarProps = {
  activeKey?: string | null;
  defaultActiveKey?: string | null;
  onChange?: (key: string) => void;
  safeArea?: boolean;
  children?: React.ReactNode;
} & NativeProps;

const classPrefix = `adm-tab-bar`;

const defaultProps = {
  safeArea: false,
};

export const TabBar: FC<TabBarProps> = p => {
  const props = mergeProps(defaultProps, p);

  let firstActiveKey: string | null = null;

  const items: ReactElement<ComponentProps<typeof TabBarItem>>[] = [];

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

  return withNativeProps(
    props,
    <View className={classPrefix}>
      <View className={`${classPrefix}-wrap`}>
        {items.map(item => {
          const active = item.key === activeKey;

          function renderContent() {
            const iconElement = item.props.icon && (
              <View className={`${classPrefix}-item-icon`}>
                {typeof item.props.icon === 'function' ? item.props.icon(active) : item.props.icon}
              </View>
            );
            const titleElement = item.props.title && (
              <View
                className={classNames(
                  `${classPrefix}-item-title`,
                  Boolean(iconElement) && `${classPrefix}-item-title-with-icon`
                )}
              >
                {typeof item.props.title === 'function' ? item.props.title(active) : item.props.title}
              </View>
            );
            if (iconElement) {
              return (
                <>
                  <Badge content={item.props.badge} className={`${classPrefix}-icon-badge`}>
                    {iconElement}
                  </Badge>
                  {titleElement}
                </>
              );
            }
            if (titleElement) {
              return (
                <Badge content={item.props.badge} className={`${classPrefix}-title-badge`}>
                  {titleElement}
                </Badge>
              );
            }
            return null;
          }

          return withNativeProps(
            item.props,
            <View
              // @ts-ignore
              key={item.key}
              onClick={() => {
                const { key } = item;
                if (key === undefined || key === null) return;
                setActiveKey(key.toString());
              }}
              className={classNames(`${classPrefix}-item`, {
                [`${classPrefix}-item-active`]: active,
              })}
            >
              {renderContent()}
            </View>
          );
        })}
      </View>

      {props.safeArea && <SafeArea position='bottom' />}
    </View>
  );
};
