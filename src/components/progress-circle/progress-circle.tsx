import React, { CSSProperties, FC, useMemo } from 'react';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { View } from '@tarojs/components';

const classPrefix = `adm-progress-circle`;

export type ProgressCircleProps = {
  percent?: number;
  children?: React.ReactNode;
} & NativeProps<'--size' | '--track-width' | '--track-color' | '--fill-color' | '--track-duration'>;

export const ProgressCircle: FC<ProgressCircleProps> = p => {
  const props = mergeProps({ percent: 0 }, p);

  const l = useMemo(
    () => (Math.max(props.percent - 50, 0) === 0 ? '-135' : `${props.percent * 3.6 - 315}`),
    [props.percent]
  );

  const lPercent: CSSProperties & Record<'--percent', string> = {
    '--percent': `${l}deg`,
  };

  const r = useMemo(
    () => (Math.min(props.percent, 50) === 50 ? '45' : `${props.percent * 3.6 - 135}`),
    [props.percent]
  );

  const rPercent: CSSProperties & Record<'--percent', string> = {
    '--percent': `${r}deg`,
  };

  return withNativeProps(
    props,
    <View className={`${classPrefix}`}>
      <View className={`${classPrefix}-content`}>
        <View className={`${classPrefix}-wrapper`}>
          <View className={`${classPrefix}-percent`}>
            <View className={`${classPrefix}-circle ${classPrefix}-left`}>
              <View className={`${classPrefix}-left-circle`} style={lPercent} />
            </View>
            <View className={`${classPrefix}-circle ${classPrefix}-right`}>
              <View className={`${classPrefix}-right-circle`} style={rPercent} />
            </View>
          </View>
          <View className={`${classPrefix}-default-circle`} />
        </View>
        <View className={`${classPrefix}-info`}>{props.children}</View>
      </View>
    </View>
  );
};
