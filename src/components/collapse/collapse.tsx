import React, { FC, ReactElement, ComponentProps, useState, useRef } from 'react';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { UnfoldIcon } from 'antd-mobile-taro-icons';
import classNames from 'classnames';
import { usePropsValue } from 'antd-mobile/es/utils/use-props-value';
import { useShouldRender } from 'antd-mobile/es/utils/should-render';
import { useIsomorphicUpdateLayoutEffect } from 'antd-mobile/es/utils/use-isomorphic-update-layout-effect';
import { traverseReactNode } from 'antd-mobile/es/utils/traverse-react-node';
import { ITouchEvent, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useMount } from 'ahooks';
import { isWeapp } from '../../utils/client';
import List from '../list';

const classPrefix = `adm-collapse`;

export type CollapsePanelProps = {
  key: string;
  title: React.ReactNode;
  disabled?: boolean;
  forceRender?: boolean;
  destroyOnClose?: boolean;
  onClick?: (event: ITouchEvent) => void;
  arrow?: React.ReactNode | ((active: boolean) => React.ReactNode);
  children?: React.ReactNode;
} & NativeProps;

export const CollapsePanel: FC<CollapsePanelProps> = () => {
  return null;
};

const CollapsePanelContent: FC<{
  visible: boolean;
  forceRender: boolean;
  destroyOnClose: boolean;
  children?: React.ReactNode;
}> = props => {
  const { visible } = props;
  const innerRef = useRef<HTMLDivElement>(null);
  const shouldRender = useShouldRender(visible, props.forceRender, props.destroyOnClose);
  const [height, setHeight] = useState<number | 'auto'>(0);

  const nodeRef = useRef<Taro.NodesRef | null>(null);

  useMount(() => {
    if (isWeapp) {
      setTimeout(() => {
        const inner = innerRef.current;

        if (!inner) return;
        // TODO:找一个更合适的方式 做节点的唯一标识
        // @ts-ignore
        if (inner?.sid) {
          nodeRef.current = Taro.createSelectorQuery()
            // @ts-ignore
            .select(`#${inner?.sid}`);
        } else {
          console.error(`HTMLDivElement: Taro node can no find sid`);
        }

        if (!visible) return;
        if (!nodeRef.current) return;
        nodeRef.current.boundingClientRect(rect => setHeight(rect.height)).exec();
      }, 0);
    }
  });

  useIsomorphicUpdateLayoutEffect(() => {
    if (isWeapp) {
      if (!nodeRef.current) return;
      if (visible) {
        if (!nodeRef.current) return;
        Taro.nextTick(() => {
          if (!nodeRef.current) return;
          nodeRef.current
            .boundingClientRect(rect => {
              setHeight(rect.height);
            })
            .exec();
        });

        setTimeout(() => {
          setHeight('auto');
        }, 200);
      } else {
        nodeRef.current
          .boundingClientRect(rect => {
            setHeight(rect.height);
          })
          .exec();

        setTimeout(() => {
          setHeight(0);
        }, 200);
      }
    }
  }, [visible]);

  return (
    <View
      className={`${classPrefix}-panel-content`}
      style={{
        // eslint-disable-next-line no-nested-ternary
        height: isWeapp ? height : visible ? 'auto' : 0,
      }}
    >
      <View className={`${classPrefix}-panel-content-inner`} ref={innerRef}>
        <List.Item>{shouldRender && props.children}</List.Item>
      </View>
    </View>
  );
};

type ValueProps<T> = {
  activeKey?: T;
  defaultActiveKey?: T;
  onChange?: (activeKey: T) => void;
  arrow?: React.ReactNode | ((active: boolean) => React.ReactNode);
};

export type CollapseProps = (
  | ({
      accordion?: false;
    } & ValueProps<string[]>)
  | ({
      accordion: true;
    } & ValueProps<string | null>)
) & {
  children?: React.ReactNode;
} & NativeProps;

export const Collapse: FC<CollapseProps> = props => {
  const panels: ReactElement<ComponentProps<typeof CollapsePanel>>[] = [];
  traverseReactNode(props.children, child => {
    if (!React.isValidElement(child)) return;
    const { key } = child;
    if (typeof key !== 'string') return;
    // @ts-ignore
    panels.push(child);
  });

  const [activeKey, setActiveKey] = usePropsValue<string[]>(
    props.accordion
      ? {
          // eslint-disable-next-line no-nested-ternary
          value: props.activeKey === undefined ? undefined : props.activeKey === null ? [] : [props.activeKey],
          defaultValue:
            props.defaultActiveKey === undefined || props.defaultActiveKey === null ? [] : [props.defaultActiveKey],
          onChange: v => {
            props.onChange?.(v[0] ?? null);
          },
        }
      : {
          value: props.activeKey,
          defaultValue: props.defaultActiveKey ?? [],
          onChange: props.onChange,
        }
  );
  // eslint-disable-next-line no-nested-ternary
  const activeKeyList = activeKey === null ? [] : Array.isArray(activeKey) ? activeKey : [activeKey];

  return withNativeProps(
    props,
    <View className={classPrefix}>
      <List>
        {panels.map(panel => {
          const key = panel.key as string;
          const active = activeKeyList.includes(key);
          const handleClick = (event: ITouchEvent) => {
            if (props.accordion) {
              if (active) {
                setActiveKey([]);
              } else {
                setActiveKey([key]);
              }
            } else if (active) {
              setActiveKey(activeKeyList.filter(v => v !== key));
            } else {
              setActiveKey([...activeKeyList, key]);
            }

            panel.props.onClick?.(event);
          };

          const renderArrow = () => {
            let arrow: CollapseProps['arrow'] = <UnfoldIcon />;
            if (props.arrow !== undefined) {
              arrow = props.arrow;
            }
            if (panel.props.arrow !== undefined) {
              arrow = panel.props.arrow;
            }
            return typeof arrow === 'function' ? (
              arrow(active)
            ) : (
              <View
                className={classNames(`${classPrefix}-arrow`, {
                  [`${classPrefix}-arrow-active`]: active,
                })}
              >
                {arrow}
              </View>
            );
          };

          return (
            <React.Fragment key={key}>
              {withNativeProps(
                panel.props,
                <List.Item
                  className={`${classPrefix}-panel-header`}
                  onClick={handleClick}
                  disabled={panel.props.disabled}
                  arrow={renderArrow()}
                >
                  {panel.props.title}
                </List.Item>
              )}
              <CollapsePanelContent
                visible={active}
                forceRender={!!panel.props.forceRender}
                destroyOnClose={!!panel.props.destroyOnClose}
              >
                {panel.props.children}
              </CollapsePanelContent>
            </React.Fragment>
          );
        })}
      </List>
    </View>
  );
};
