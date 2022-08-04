import React, { FC, ReactNode, ReactElement, ComponentProps, useMemo, useState, useCallback, useEffect } from 'react';
import classNames from 'classnames';
// import { animated } from '@react-spring/web'
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { usePropsValue } from 'antd-mobile/es/utils/use-props-value';
// import { useResizeEffect } from 'antd-mobile/es/utils/use-resize-effect';
// import { useTabListScroll } from 'antd-mobile/es/utils/use-tab-list-scroll';
// import ScrollMask from '../scroll-mask'
import { ShouldRender } from 'antd-mobile/es/utils/should-render';
import { traverseReactNode } from 'antd-mobile/es/utils/traverse-react-node';
import { ScrollView, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { uuid } from '../../utils/uuid';

const classPrefix = `adm-jumbo-tabs`;

export type JumboTabProps = {
  title: ReactNode;
  description: ReactNode;
  disabled?: boolean;
  forceRender?: boolean;
  destroyOnClose?: boolean;
  children?: React.ReactNode;
} & NativeProps;

export const JumboTab: FC<JumboTabProps> = () => {
  return null;
};

export type JumboTabsProps = {
  activeKey?: string | null;
  defaultActiveKey?: string | null;
  onChange?: (key: string) => void;
  children?: React.ReactNode;
} & NativeProps;

export const JumboTabs: FC<JumboTabsProps> = props => {
  const id = useMemo(() => uuid(16, undefined, false), []);
  // const tabListContainerRef = useRef<HTMLDivElement>(null);
  // const rootRef = useRef<HTMLDivElement>(null);
  // const keyToIndexRecord: Record<string, number> = {};
  let firstActiveKey: string | null = null;

  const panes: ReactElement<ComponentProps<typeof JumboTab>>[] = [];

  traverseReactNode(props.children, (child, index) => {
    if (!React.isValidElement(child)) return;
    const { key } = child;
    if (typeof key !== 'string') return;
    if (index === 0) {
      firstActiveKey = key;
    }
    panes.push(child);
    // const length = panes.push(child);
    // keyToIndexRecord[key] = length - 1;
  });

  const [activeKey, setActiveKey] = usePropsValue({
    value: props.activeKey,
    defaultValue: props.defaultActiveKey ?? firstActiveKey,
    onChange: v => {
      if (v === null) return;
      props.onChange?.(v);
    },
  });

  // const { scrollLeft, animate } = useTabListScroll(tabListContainerRef, keyToIndexRecord[activeKey as string]);

  // useResizeEffect(() => {
  //   animate(true);
  // }, rootRef);

  const [scrollLeft, setScrollLeft] = useState(0);

  const [layoutWidth, setLayoutWidth] = useState(0);
  const [offsetLeft, setOffsetLeft] = useState<number[]>([]);

  const computeScrollLeft = useCallback(
    index => {
      let left = 0;
      for (let i = 0; i < offsetLeft.length; i++) {
        if (i >= index) break;
        left += offsetLeft[i];
      }
      return left;
    },
    [offsetLeft]
  );

  useEffect(() => {
    setTimeout(() => {
      let width = 0;
      Taro.createSelectorQuery()
        .select(`#${id}  .${classPrefix}-header`)
        .boundingClientRect(rect => {
          setLayoutWidth(rect?.width ?? 0);
          width = rect?.width ?? 0;
        })
        .exec();

      const map = new Map<string, number>();
      for (let i = 0; i < panes.length; i++) {
        map.set(panes[i].key as string, i);
      }
      Taro.createSelectorQuery()
        .selectAll(`#${id} .${classPrefix}-tab-wrapper`)
        .boundingClientRect(rect => {
          const n: number[] = [];
          // @ts-ignore
          for (let i = 0; i < rect.length; i++) {
            // @ts-ignore
            n.push(rect[i].width);
          }
          setOffsetLeft([...n]);

          let left = 0;
          // @ts-ignore
          const m = map.get(activeKey) as number;
          // eslint-disable-next-line no-restricted-syntax
          for (const [, index] of map) {
            if (index < m) {
              // @ts-ignore
              left += rect[index].width;
            }
          }

          // @ts-ignore
          setScrollLeft(left - width / 2 + rect[m].width / 2);
        })
        .exec();
    }, 0);
  }, []);

  const handleAnimation = useCallback(
    (index: number) => {
      const left = computeScrollLeft(index);

      setScrollLeft(left - layoutWidth / 2 + offsetLeft[index] / 2);
    },
    [layoutWidth, offsetLeft]
  );

  return withNativeProps(
    props,
    <View className={classPrefix} id={id}>
      <View className={`${classPrefix}-header`}>
        {/* <ScrollMask scrollTrackRef={tabListContainerRef} /> */}
        {/* <animated.View className={`${classPrefix}-tab-list`} ref={tabListContainerRef} scrollLeft={scrollLeft}> */}
        <ScrollView scrollX scrollLeft={scrollLeft} scrollWithAnimation>
          <View className={`${classPrefix}-tab-list`}>
            {panes.map((pane, index) =>
              withNativeProps(
                pane.props,
                <View key={pane.key as string} className={`${classPrefix}-tab-wrapper`}>
                  <View
                    onClick={() => {
                      const { key } = pane;
                      if (pane.props.disabled) return;
                      if (key === undefined || key === null) {
                        return;
                      }
                      setActiveKey(key.toString());
                      // animation 滑动距离计算
                      handleAnimation(index);
                    }}
                    className={classNames(`${classPrefix}-tab`, {
                      [`${classPrefix}-tab-active`]: pane.key === activeKey,
                      [`${classPrefix}-tab-disabled`]: pane.props.disabled,
                    })}
                  >
                    <View className={`${classPrefix}-tab-title`}>{pane.props.title}</View>
                    <View className={`${classPrefix}-tab-description`}>{pane.props.description}</View>
                  </View>
                </View>
              )
            )}
          </View>
          {/* </animated.View> */}
        </ScrollView>
      </View>
      {panes.map(pane => {
        if (pane.props.children === undefined) {
          return null;
        }
        const active = pane.key === activeKey;
        return (
          <ShouldRender
            key={pane.key}
            active={active}
            forceRender={pane.props.forceRender}
            destroyOnClose={pane.props.destroyOnClose}
          >
            <View className={`${classPrefix}-content`} style={{ display: active ? 'block' : 'none' }}>
              {pane.props.children}
            </View>
          </ShouldRender>
        );
      })}
    </View>
  );
};
