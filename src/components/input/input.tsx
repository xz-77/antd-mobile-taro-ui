import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { usePropsValue } from 'antd-mobile/es/utils/use-props-value';
import { RoundCloseFillIcon } from 'antd-mobile-taro-icons';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import classNames from 'classnames';
import { bound } from 'antd-mobile/es/utils/bound';
import { isIOS } from 'antd-mobile/es/utils/validate';
import { View, Input as InputTaro, InputProps as InputPropsTaro, BaseEventOrig } from '@tarojs/components';
// import { useConfig } from '../config-provider';

const classPrefix = `adm-input`;

// type NativeInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type AriaProps = {
  // These props currently are only used internally. They are not exported to users:
  // role?: string;
};

export type InputProps = Pick<InputPropsTaro, 'maxlength' | 'name' | 'focus' | 'onFocus' | 'onBlur' | 'value'> & {
  type?: InputPropsTaro['type'] | 'password';
  defaultValue?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  clearable?: boolean;
  // onlyShowClearWhenFocus?: boolean;
  onClear?: () => void;
  id?: string;
  onEnterPress?: (e: BaseEventOrig<InputPropsTaro.inputValueEventDetail>) => void;
  // enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
  min?: number;
  max?: number;
} & NativeProps<'--font-size' | '--color' | '--placeholder-color' | '--text-align'> &
  AriaProps;

const defaultProps = {
  defaultValue: '',
  // onlyShowClearWhenFocus: true,
};

export type InputRef = {
  clear: () => void;
  focus: () => void;
  blur: () => void;
  nativeElement: HTMLInputElement | null;
};

export const Input = forwardRef<InputRef, InputProps>((p, ref) => {
  const props: Omit<InputProps, 'defaultValue'> & {
    defaultValue: string;
    // onlyShowClearWhenFocus: boolean;
  } = mergeProps(defaultProps, p);
  const [value, setValue] = usePropsValue(props);
  // const [hasFocus, setHasFocus] = useState(false);
  const compositionStartRef = useRef(false);
  const nativeInputRef = useRef<HTMLInputElement>(null);
  // const { locale } = useConfig();

  useImperativeHandle(ref, () => ({
    clear: () => {
      setValue('');
    },
    focus: () => {
      nativeInputRef.current?.focus();
    },
    blur: () => {
      nativeInputRef.current?.blur();
    },
    get nativeElement() {
      return nativeInputRef.current;
    },
  }));

  const handleKeydown = (e: BaseEventOrig<InputPropsTaro.inputValueEventDetail>) => {
    // if (props.onEnterPress && (e.code === 'Enter' || e.keyCode === 13)) {
    //   props.onEnterPress(e);
    // }
    // props.onKeyDown?.(e);
    props.onEnterPress?.(e);
  };

  // useIsomorphicLayoutEffect(() => {
  //   if (!props.enterKeyHint) return;
  //   nativeInputRef.current?.setAttribute('enterkeyhint', props.enterKeyHint);
  //   return () => {
  //     nativeInputRef.current?.removeAttribute('enterkeyhint');
  //   };
  // }, [props.enterKeyHint]);

  function checkValue() {
    let nextValue = value;
    if (props.type === 'number') {
      nextValue = nextValue && bound(parseFloat(nextValue), props.min, props.max).toString();
    }
    if (nextValue !== value) {
      setValue(nextValue);
    }
  }

  const shouldShowClear = (() => {
    if (!props.clearable || !value || props.readOnly) return false;

    // if (props.onlyShowClearWhenFocus) {
    //   return hasFocus;
    // }
    return true;
  })();

  return withNativeProps(
    props,
    <View className={classNames(`${classPrefix}`, props.disabled && `${classPrefix}-disabled`)}>
      <InputTaro
        ref={nativeInputRef}
        className={`${classPrefix}-element`}
        value={value}
        onInput={e => {
          setValue(e.detail.value);
        }}
        onFocus={e => {
          // setHasFocus(true);
          props.onFocus?.(e);
        }}
        onBlur={e => {
          // setHasFocus(false);
          checkValue();
          props.onBlur?.(e);
        }}
        id={props.id}
        placeholder={props.placeholder}
        disabled={props.disabled || props.readOnly}
        onConfirm={handleKeydown}
        // readOnly={props.readOnly}
        maxlength={props.maxlength}
        // minLength={props.minLength}
        // max={props.max}
        // min={props.min}
        // autoComplete={props.autoComplete}
        focus={props.focus}
        password={props.type === 'password'}
        // pattern={props.pattern}
        // inputMode={props.inputMode}
        type={props.type === 'password' ? 'text' : props.type}
        name={props.name}
        // autoCapitalize={props.autoCapitalize}
        // autoCorrect={props.autoCorrect}
        // onKeyDown={handleKeydown}
        // onKeyUp={props.onKeyUp}
        // onCompositionStart={e => {
        //   compositionStartRef.current = true;
        //   props.onCompositionStart?.(e);
        // }}
        // onCompositionEnd={e => {
        //   compositionStartRef.current = false;
        //   props.onCompositionEnd?.(e);
        // }}
        // onClick={props.onClick}
        // role={props.role}
        // aria-valuenow={props['aria-valuenow']}
        // aria-valuemax={props['aria-valuemax']}
        // aria-valuemin={props['aria-valuemin']}
        // aria-label={props['aria-label']}
      />
      {shouldShowClear && (
        <View
          className={`${classPrefix}-clear`}
          // onMouseDown={e => {
          //   e.preventDefault();
          // }}
          onClick={() => {
            setValue('');
            props.onClear?.();

            // https://github.com/ant-design/ant-design-mobile/issues/5212
            if (isIOS() && compositionStartRef.current) {
              compositionStartRef.current = false;
              nativeInputRef.current?.blur();
            }
          }}
          // aria-label={locale.Input.clear}
        >
          <RoundCloseFillIcon />
        </View>
      )}
    </View>
  );
});
