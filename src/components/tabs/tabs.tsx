import React, {
  FC,
  ReactNode,
  ReactElement,
  ComponentProps,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
} from 'react';
import classNames from 'classnames';
// import { useSpring, animated } from '@react-spring/web';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { usePropsValue } from 'antd-mobile/es/utils/use-props-value';
// import { bound } from 'antd-mobile/es/utils/bound';
// import { useThrottleFn, useIsomorphicLayoutEffect } from 'ahooks';
// import { useMutationEffect } from 'antd-mobile/es/utils/use-mutation-effect';
// import { useResizeEffect } from 'antd-mobile/es/utils/use-resize-effect';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
// import { useIsomorphicUpdateLayoutEffect } from 'antd-mobile/es/utils/use-isomorphic-update-layout-effect';
import { ShouldRender } from 'antd-mobile/es/utils/should-render';
import { traverseReactNode } from 'antd-mobile/es/utils/traverse-react-node';
import { ScrollView, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { uuid } from '../../utils/uuid';

const classPrefix = `adm-tabs`;

export type TabProps = {
  title: ReactNode;
  disabled?: boolean;
  forceRender?: boolean;
  destroyOnClose?: boolean;
  children?: ReactNode;
} & NativeProps;

export const Tab: FC<TabProps> = () => {
  return null;
};

export type TabsProps = {
  activeKey?: string | null;
  defaultActiveKey?: string | null;
  activeLineMode?: 'auto' | 'full' | 'fixed';
  stretch?: boolean;
  onChange?: (key: string) => void;
  children?: React.ReactNode;
} & NativeProps<
  | '--fixed-active-line-width'
  | '--active-line-height'
  | '--active-line-border-radius'
  | '--title-font-size'
  | '--content-padding'
  | '--active-title-color'
  | '--active-line-color'
>;

const defaultProps = {
  activeLineMode: 'auto',
  stretch: true,
};

// TODO: 待优化
export const Tabs: FC<TabsProps> = p => {
  const props = mergeProps(defaultProps, p);
  // const tabListContainerRef = useRef<HTMLDivElement>(null);
  // const activeLineRef = useRef<HTMLDivElement>(null);
  // const keyToIndexRecord: Record<string, number> = {};
  let firstActiveKey: string | null = null;

  const panes: ReactElement<ComponentProps<typeof Tab>>[] = [];
  const ref = useRef<Map<string, number>>(new Map());

  traverseReactNode(props.children, (child, index) => {
    if (!React.isValidElement(child)) return;
    const { key } = child;
    if (typeof key !== 'string') return;
    if (index === 0) {
      firstActiveKey = key;
    }
    panes.push(child);
    ref.current.set(child.key as string, index);
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

  // const [{ x, width }, api] = useSpring(() => ({
  //   x: 0,
  //   width: 0,
  //   config: {
  //     tension: 300,
  //     clamp: true,
  //   },
  // }));

  // const [{ scrollLeft }, scrollApi] = useSpring(() => ({
  //   scrollLeft: 0,
  //   config: {
  //     tension: 300,
  //     clamp: true,
  //   },
  // }));

  // const [{ leftMaskOpacity, rightMaskOpacity }, maskApi] = useSpring(() => ({
  //   leftMaskOpacity: 0,
  //   rightMaskOpacity: 0,
  //   config: {
  //     clamp: true,
  //   },
  // }));

  // function animate(immediate = false) {
  //   const container = tabListContainerRef.current;
  //   if (!container) return;
  //   const activeIndex = keyToIndexRecord[activeKey as string];
  //   if (activeIndex === undefined) {
  //     api.start({
  //       x: 0,
  //       width: 0,
  //       immediate: true,
  //     });
  //     return;
  //   }
  //   const activeLine = activeLineRef.current;
  //   if (!activeLine) return;

  //   const activeTabWrapper = container.children.item(activeIndex + 1) as HTMLDivElement;
  //   const activeTab = activeTabWrapper.children.item(0) as HTMLDivElement;
  //   const activeTabLeft = activeTab.offsetLeft;
  //   const activeTabWidth = activeTab.offsetWidth;
  //   const activeTabWrapperLeft = activeTabWrapper.offsetLeft;
  //   const activeTabWrapperWidth = activeTabWrapper.offsetWidth;

  //   const containerWidth = container.offsetWidth;
  //   const containerScrollWidth = container.scrollWidth;
  //   const containerScrollLeft = container.scrollLeft;

  //   const activeLineWidth = activeLine.offsetWidth;

  //   let x = 0;
  //   let width = 0;
  //   if (props.activeLineMode === 'auto') {
  //     x = activeTabLeft;
  //     width = activeTabWidth;
  //   } else if (props.activeLineMode === 'full') {
  //     x = activeTabWrapperLeft;
  //     width = activeTabWrapperWidth;
  //   } else {
  //     x = activeTabLeft + (activeTabWidth - activeLineWidth) / 2;
  //   }
  //   api.start({
  //     x,
  //     width,
  //     immediate,
  //   });

  //   const maxScrollDistance = containerScrollWidth - containerWidth;
  //   if (maxScrollDistance <= 0) return;

  //   const nextScrollLeft = bound(
  //     activeTabLeft - (containerWidth - activeTabWidth) / 2,
  //     0,
  //     containerScrollWidth - containerWidth
  //   );

  //   scrollApi.start({
  //     scrollLeft: nextScrollLeft,
  //     from: { scrollLeft: containerScrollLeft },
  //     immediate,
  //   });
  // }

  // useIsomorphicLayoutEffect(() => {
  //   animate(!x.isAnimating);
  // }, []);

  // useIsomorphicUpdateLayoutEffect(() => {
  //   animate();
  // }, [activeKey]);

  // useResizeEffect(() => {
  //   animate(!x.isAnimating);
  // }, tabListContainerRef);

  // useMutationEffect(
  //   () => {
  //     animate(!x.isAnimating);
  //   },
  //   tabListContainerRef,
  //   {
  //     subtree: true,
  //     childList: true,
  //     characterData: true,
  //   }
  // );

  // const { run: updateMask } = useThrottleFn(
  //   (immediate = false) => {
  //     const container = tabListContainerRef.current;
  //     if (!container) return;

  //     const scrollLeft = container.scrollLeft;
  //     const showLeftMask = scrollLeft > 0;
  //     const showRightMask = scrollLeft + container.offsetWidth < container.scrollWidth;

  //     maskApi.start({
  //       leftMaskOpacity: showLeftMask ? 1 : 0,
  //       rightMaskOpacity: showRightMask ? 1 : 0,
  //       immediate,
  //     });
  //   },
  //   {
  //     wait: 100,
  //     trailing: true,
  //     leading: true,
  //   }
  // );

  // useIsomorphicLayoutEffect(() => {
  //   updateMask(true);
  // }, []);

  // 生成唯一id
  const id = useMemo(() => uuid(16, undefined, false), []);

  const [scrollLeft, setScrollLeft] = useState(0);

  const [layoutWidth, setLayoutWidth] = useState(0);
  const [offsetLeft, setOffsetLeft] = useState<number[]>([]);

  useEffect(() => {
    setTimeout(() => {
      // let width = 0; // 获取整个header的总宽度
      Taro.createSelectorQuery()
        .select(`#${id}  .${classPrefix}-header`)
        .boundingClientRect(rect => {
          setLayoutWidth(rect?.width ?? 0);
          // width = rect?.width ?? 0;
        })
        .exec();

      // const map = new Map<string, number>();
      // for (let i = 0; i < panes.length; i++) {
      //   map.set(panes[i].key as string, i);
      // }
      // setMap(map);
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

          // let left = 0;
          // // @ts-ignore
          // const m = map.get(activeKey) as number;
          // // eslint-disable-next-line no-restricted-syntax
          // for (const [, index] of map) {
          //   if (index < m) {
          //     // @ts-ignore
          //     left += rect[index].width;
          //   }
          // }

          setScrollLeft(computeScrollLeft(activeKey as string));
        })
        .exec();
    }, 0);
  }, []);

  const computeScrollLeft = useCallback(
    (key: string) => {
      if (!ref.current) return 0;
      const index = ref.current.get(key) as number;
      let left = 0;
      for (let i = 0; i < offsetLeft.length; i++) {
        if (i >= index) break;
        left += offsetLeft[i];
      }

      if (left < layoutWidth / 2) return 0;
      const count = offsetLeft.reduce((a, b) => a + b, 0);
      if (count - left < layoutWidth / 2) return left;

      return left - layoutWidth / 2 + offsetLeft[index] / 2;
    },
    [offsetLeft, layoutWidth]
  );

  const handleAnimation = useCallback(
    (key: string) => {
      // const left = computeScrollLeft(index);
      setScrollLeft(computeScrollLeft(key));
    },
    [layoutWidth, offsetLeft]
  );

  const computeLineLeft = useCallback(
    (key: string) => {
      if (!ref.current) return 0;
      const index = ref.current.get(key) as number;
      let left = 0;
      for (let i = 0; i < offsetLeft.length; i++) {
        if (i >= index) break;
        left += offsetLeft[i];
      }

      if (left < layoutWidth / 2) return left;
      const count = offsetLeft.reduce((a, b) => a + b, 0);
      if (count - left < layoutWidth / 2) return left;

      return left;
    },
    [layoutWidth, offsetLeft]
  );

  return withNativeProps(
    props,
    <View className={classPrefix} id={id}>
      <View className={`${classPrefix}-header`}>
        {/* <animated.View
          className={classNames(`${classPrefix}-header-mask`, `${classPrefix}-header-mask-left`)}
          style={{
            opacity: leftMaskOpacity,
          }}
        />
        <animated.View
          className={classNames(`${classPrefix}-header-mask`, `${classPrefix}-header-mask-right`)}
          style={{
            opacity: rightMaskOpacity,
          }}
        /> */}
        <ScrollView scrollX scrollLeft={scrollLeft} scrollWithAnimation>
          <View
            className={`${classPrefix}-tab-list`}
            // ref={tabListContainerRef}
            // scrollLeft={scrollLeft}
            // onScroll={updateMask}
          >
            {/* <View
              // ref={activeLineRef}
              className={`${classPrefix}-tab-line`}
              style={{
                width:
                  props.activeLineMode === 'fixed'
                    ? 'var(--fixed-active-line-width, 30px)'
                    : offsetLeft[ref.current.get(activeKey as string) as number],
                left: computeLineLeft(activeKey as string),
                transition: 'all 0.5s',
              }}
              // style={{
              //   width: props.activeLineMode === 'fixed' ? 'var(--fixed-active-line-width, 30px)' : width,
              //   x,
              // }}
            /> */}
            <View
              className={`${classPrefix}-tab-line`}
              style={{
                margin: '0 auto',
                width: offsetLeft[ref.current.get(activeKey as string) as number],
                left: computeLineLeft(activeKey as string),
                transition: 'all 0.5s',
              }}
            >
              <View
                // ref={activeLineRef}
                className={`${classPrefix}-tab-line-content`}
                style={{
                  width:
                    props.activeLineMode === 'fixed'
                      ? 'var(--fixed-active-line-width, 30px)'
                      : offsetLeft[ref.current.get(activeKey as string) as number],
                }}
                // style={{
                //   width: props.activeLineMode === 'fixed' ? 'var(--fixed-active-line-width, 30px)' : width,
                //   x,
                // }}
              />
            </View>
            {panes.map(pane =>
              withNativeProps(
                pane.props,
                <View
                  key={pane.key as string}
                  className={classNames(`${classPrefix}-tab-wrapper`, {
                    [`${classPrefix}-tab-wrapper-stretch`]: props.stretch,
                  })}
                >
                  <View
                    onClick={() => {
                      const { key } = pane;
                      if (pane.props.disabled) return;
                      if (key === undefined || key === null) {
                        return;
                      }
                      setActiveKey(key.toString());
                      // animation 滑动距离计算
                      handleAnimation(key.toString());
                    }}
                    className={classNames(`${classPrefix}-tab`, {
                      [`${classPrefix}-tab-active`]: pane.key === activeKey,
                      [`${classPrefix}-tab-disabled`]: pane.props.disabled,
                    })}
                  >
                    {pane.props.title}
                  </View>
                </View>
              )
            )}
          </View>
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
